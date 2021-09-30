import { ALPHABETICAL, RELEASE_DATE, VITALITY } from '../utils/constants.js';
import { lang } from '../utils/l10n.js';

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
    return {
      _script: {
        type: 'string',
        order: 'asc',
        script: {
          lang: 'painless',
          source: `
             if (
                 doc['publiccode.description.${lang}.localisedName.keyword'].size() != 0
                 && !doc['publiccode.description.${lang}.localisedName.keyword'].empty
                ) {
               return doc['publiccode.description.${lang}.localisedName.keyword'].value
             }
             else {
               return doc['publiccode.name.keyword'].value
             }
           `,
        },
      },
    };
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
