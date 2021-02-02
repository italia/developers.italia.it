import { ALPHABETICAL, RELEASE_DATE, VITALITY } from '../utils/constants.js';

export const buildFilter = (filters) => {
  let { intendedAudiences, categories, developmentStatuses } = filters;
  intendedAudiences = Array.isArray(intendedAudiences) ? intendedAudiences : [];
  categories = Array.isArray(categories) ? categories : [];
  developmentStatuses = Array.isArray(developmentStatuses) ? developmentStatuses : [];
  return [
    ...intendedAudiences.map((filterValue) => ({
      term: { 'publiccode.intendedAudience.scope': filterValue },
    })),
    ...categories.map((filterValue) => ({ term: { 'publiccode.categories': filterValue } })),
    ...developmentStatuses.map((filterValue) => ({
      term: { 'publiccode.developmentStatus': filterValue },
    })),
  ];
};

export const buildSort = (sortBy) => {
  if (sortBy === ALPHABETICAL) {
    return [
      {
        'publiccode.description.it.localizedName.keyword': { order: 'asc', unmapped_type: 'keyword' },
      },
    ];
  }
  if (sortBy === VITALITY) {
    return [
      {
        vitalityScore: { order: 'desc' },
      },
    ];
  }
  if (sortBy === RELEASE_DATE) {
    return [
      {
        'publiccode.releaseDate': { order: 'desc' },
      },
    ];
  }

  return [];
};
