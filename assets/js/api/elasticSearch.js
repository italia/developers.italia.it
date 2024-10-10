import elasticsearch from 'elasticsearch';
import { SOFTWARE_OPEN, SOFTWARE_REUSE } from '../utils/constants.js';
import { lang } from '../utils/l10n.js';
import { buildFilter, buildSort } from './elasticSearchUtils.js';

const client = new elasticsearch.Client({
  // eslint-disable-next-line no-undef
  host: ELASTICSEARCH_FRONTEND_URL,
});

export const querySoftware = async ({ type, searchValue, filters, sortBy, from, size }) => {
  const must = [{ term: { type: 'software' } }];
  if (searchValue) {
    must.push({
      multi_match: {
        query: searchValue,
        fields: [
          'publiccode.name^3',
          `publiccode.description.${lang}.localizedName^3`,
          `publiccode.description.${lang}.shortDescription^2`,
          `publiccode.description.${lang}.longDescription`,
          `publiccode.description.${lang}.features`,
        ],
      },
    });
  }

  if (type === SOFTWARE_REUSE) {
    must.push({ exists: { field: 'publiccode.it.riuso.codiceIPA' } });
  }

  const must_not = [];

  if (type === SOFTWARE_OPEN) {
    must_not.push(
      { exists: { field: 'publiccode.it.riuso.codiceIPA' } },
      { match: { 'publiccode.indendedAudience.unsupportedCountries': 'it' } }
    );
  }

  const query = {
    bool: {
      filter: buildFilter(filters),
      must,
      must_not,
    },
  };
  return await executeQuery({ query, sort: buildSort(sortBy), from, size });
};

export const queryAllSite = async ({ searchValue, filters, sortBy, from, size }) => {
  const query = {
    bool: {
      filter: buildFilter(filters),
      must: [
        searchValue
          ? {
              multi_match: {
                query: searchValue,
                fields: [
                  'publiccode.name^3',
                  'it-riuso-codiceIPA-label^3',
                  'title^3',
                  // eslint-disable-next-line sonarjs/no-duplicate-string
                  'subtitle^2',
                  `publiccode.description.${lang}.localizedName^3`,
                  `publiccode.description.${lang}.shortDescription^2`,
                  `publiccode.description.${lang}.longDescription`,
                  `publiccode.description.${lang}.features`,
                  'html',
                ],
              },
            }
          : null,
        {
          bool: {
            should: [
              {
                bool: {
                  must: [{ term: { type: 'news' } }, { term: { lang } }],
                },
              },
              {
                bool: {
                  must: [{ term: { type: 'platform' } }, { term: { lang } }],
                },
              },
              { term: { type: 'platform' } },
              { term: { type: 'software' } },
              { term: { type: 'administration' } },
            ],
          },
        },
      ],
    },
  };

  return await executeQuery({ query, sort: buildSort(sortBy), from, size });
};

export const queryAdministration = async ({ searchValue, filters, sortBy, from, size }) => {
  const query = {
    bool: {
      filter: buildFilter(filters),
      must: [
        searchValue ? { multi_match: { query: searchValue, fields: ['it-riuso-codiceIPA-label'] } } : null,
        { term: { type: 'administration' } },
      ],
    },
  };
  return await executeQuery({ query, sort: buildSort(sortBy), from, size });
};

export const queryPlatform = async ({ searchValue, filters, sortBy, from, size }) => {
  const query = {
    bool: {
      filter: [...buildFilter(filters), { term: { type: 'platform' } }, { term: { lang } }],
      must: searchValue ? [{ multi_match: { query: searchValue, fields: ['title^3', 'subtitle^2', 'html'] } }] : [],
    },
  };
  return await executeQuery({ query, sort: buildSort(sortBy), from, size });
};

export const queryApi = async ({ searchValue, filters, sortBy, from, size }) => {
  const query = {
    bool: {
      filter: [...buildFilter(filters), { term: { type: 'api' } }, { term: { lang } }],
      must: searchValue ? [{ multi_match: { query: searchValue, fields: ['title^3', 'subtitle^2', 'html'] } }] : [],
    },
  };
  return await executeQuery({ query, sort: buildSort(sortBy), from, size });
};

// This is a quick solution to retain the returned items sorted during the execution of queries with pagination.
// Without the preference param, the ui will get duplicated items.
// The long term solution is a complete queries refactoring.
const preference = new Date().getTime();

const executeQuery = async ({ query, sort, from, size }) => {
  const params = {
    index: 'developers_italia_it',
    body: {
      query,
      sort,
    },
    from,
    size,
    preference,
  };
  const results = await client.search(params);
  return [results.hits.hits, results.hits.total.value];
};
