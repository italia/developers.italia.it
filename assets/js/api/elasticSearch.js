import elasticsearch from 'elasticsearch';
import { buildFilter, buildSort } from './elasticSearchUtils.js';

const client = new elasticsearch.Client({
  // eslint-disable-next-line no-undef
  host: process.env.ELASTICSEARCH_FRONTEND_URL,
});

const lang = 'it'; // TODO: i18n;

export const queryAllCatalogue = async ({ searchValue, filters, sortBy, from, size }) => {
  const results = await queryAll({ excludePosts: true, searchValue, filters, sortBy, from, size });
  return results;
};

export const queryAllSite = async ({ searchValue, filters, sortBy, from, size }) => {
  const results = await queryAll({ excludePosts: false, searchValue, filters, sortBy, from, size });
  return results;
};

// TODO: excludePosts is bugged because filters also api. We need to fix and clean es queries
const queryAll = async ({ excludePosts, searchValue, filters, sortBy, from, size }) => {
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
                  must: [
                    { term: { _type: 'post' } },
                    excludePosts ? { terms: { type: ['platform'] } } : null,
                    { term: { lang } },
                  ],
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

export const querySoftwareReuse = async ({ searchValue, filters, sortBy, from, size }) => {
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
                  `publiccode.description.${lang}.localizedName^3`,
                  `publiccode.description.${lang}.shortDescription^2`,
                  `publiccode.description.${lang}.longDescription`,
                ],
              },
            }
          : null,
        { exists: { field: 'publiccode.it.riuso.codiceIPA' } }, // This is not a bug. It was not localised in the old search engine
        { term: { _type: 'software' } },
      ],
    },
  };
  const results = await executeQuery({ type: 'software', query, sort: buildSort(sortBy), from, size });
  return results;
};

export const querySoftwareOpenSource = async ({ searchValue, filters, sortBy, from, size }) => {
  const query = {
    bool: {
      filter: buildFilter(filters),
      must: searchValue
        ? [
            {
              multi_match: {
                query: searchValue,
                fields: [
                  'publiccode.name^3',
                  `publiccode.description.${lang}.localizedName^3`,
                  `publiccode.description.${lang}.shortDescription^2`,
                  `publiccode.description.${lang}.longDescription`,
                ],
              },
            },
          ]
        : [],
      must_not: [
        // This is not a bug. It was not localised in the old search engine
        { exists: { field: 'publiccode.it.riuso.codiceIPA' } },
        { match: { 'publiccode.indendedAudience.unsupportedCountries': 'it' } },
      ],
    },
  };
  const results = await executeQuery({ type: 'software', query, sort: buildSort(sortBy), from, size });
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

const executeQuery = async ({ type, query, sort, from, size }) => {
  const params = {
    index: 'jekyll',
    type,
    body: {
      query,
      sort,
    },
    from,
    size,
  };
  const results = await client.search(params);
  return [results.hits.hits, results.hits.total];
};
