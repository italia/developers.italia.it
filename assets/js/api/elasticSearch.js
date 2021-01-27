import elasticsearch from 'elasticsearch';
import { buildFilter, buildSort } from './elasticSearchUtils.js';
import { SOFTWARE_OPEN, SOFTWARE_REUSE } from '../utils/constants.js';
import { lang } from '../utils/l10n.js';

const client = new elasticsearch.Client({
  // eslint-disable-next-line no-undef
  host: process.env.ELASTICSEARCH_FRONTEND_URL,
});

export const querySoftware = async ({ type, searchValue, filters, sortBy, from, size }) => {
  const must = [{ term: { _type: 'software' } }];
  if (searchValue) {
    must.push({
      multi_match: {
        query: searchValue,
        fields: [
          'publiccode.name^3',
          `publiccode.description.${lang}.localizedName^3`,
          `publiccode.description.${lang}.shortDescription^2`,
          `publiccode.description.${lang}.longDescription`,
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
  const results = await executeQuery({ query, sort: buildSort(sortBy), from, size });
  return results;
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
                  'subtitle^2',
                  `publiccode.description.${lang}.localizedName^3`,
                  `publiccode.description.${lang}.shortDescription^2`,
                  `publiccode.description.${lang}.longDescription`,
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
                  must: [{ term: { _type: 'post' } }, { term: { lang } }],
                },
              },
              { term: { _type: 'software' } },
              { term: { _type: 'administration' } },
            ],
          },
        },
      ],
    },
  };

  const results = await executeQuery({ query, sort: buildSort(sortBy), from, size });
  return results;
};

export const queryAdministration = async ({ searchValue, filters, sortBy, from, size }) => {
  const query = {
    bool: {
      filter: buildFilter(filters),
      must: [
        searchValue ? { multi_match: { query: searchValue, fields: ['it-riuso-codiceIPA-label'] } } : null,
        { term: { _type: 'administration' } },
      ],
    },
  };
  const results = await executeQuery({ query, sort: buildSort(sortBy), from, size });
  return results;
};

export const queryPlatform = async ({ searchValue, filters, sortBy, from, size }) => {
  const query = {
    bool: {
      filter: [...buildFilter(filters), { term: { type: 'platform' } }, { term: { lang } }],
      must: searchValue ? [{ multi_match: { query: searchValue, fields: ['title^3', 'subtitle^2', 'html'] } }] : [],
    },
  };
  const results = await executeQuery({ type: 'post', query, sort: buildSort(sortBy), from, size });
  return results;
};

export const queryApi = async ({ searchValue, filters, sortBy, from, size }) => {
  const query = {
    bool: {
      filter: [...buildFilter(filters), { term: { type: 'api' } }, { term: { lang } }],
      must: searchValue ? [{ multi_match: { query: searchValue, fields: ['title^3', 'subtitle^2', 'html'] } }] : [],
    },
  };
  const results = await executeQuery({ query, sort: buildSort(sortBy), from, size });
  return results;
};

// This is a quick solution to retain the returned items sorted during the execution of queries with pagination.
// Without the preference param, the ui will get duplicated items.
// The long term solution is a complete queries refactoring.
const preference = new Date().getTime();

const executeQuery = async ({ query, sort, from, size }) => {
  const params = {
    index: 'jekyll',
    body: {
      query,
      sort,
    },
    from,
    size,
    preference,
  };
  const results = await client.search(params);
  return [results.hits.hits, results.hits.total];
};
