import { ALPHABETICAL, RELEASE_DATE, VITALITY } from '../utils/constants.js';
import { lang } from '../utils/l10n.js';

export const buildFilter = (filters) => {
  let { intendedAudiences, categories, developmentStatuses } = filters;
  const { pnrr, pnrrTargets, pnrrMeasures } = filters;

  intendedAudiences = Array.isArray(intendedAudiences) ? intendedAudiences : [];
  categories = Array.isArray(categories) ? categories : [];
  developmentStatuses = Array.isArray(developmentStatuses) ? developmentStatuses : [];
  const ret = [
    ...intendedAudiences.map((filterValue) => ({
      term: { 'publiccode.intendedAudience.scope': filterValue },
    })),
    ...categories.map((filterValue) => ({ term: { 'publiccode.categories.keyword': filterValue } })),

    // We want exact match here and case sensitivity because PNRR features are basically
    // tags we came up with to mark certain type of software (the ones that help Public administrations
    // with the PNRR - https://www.governo.it/sites/governo.it/files/PNRR.pdf) - hence the
    // keyword search.

    ...developmentStatuses.map((filterValue) => ({
      term: { 'publiccode.developmentStatus': filterValue },
    })),
  ];

  if (pnrrTargets && pnrrTargets !== 'Tutti') {
    ret.push({ term: { [`publiccode.description.${lang}.features.keyword`]: `PNRR/Beneficiari/${pnrrTargets}` } });
  }

  if (pnrrMeasures && pnrrMeasures !== 'Tutte') {
    ret.push({ term: { [`publiccode.description.${lang}.features.keyword`]: `PNRR/Misura/${pnrrMeasures}` } });
  }

  if (pnrr) {
    // Not a keyword because we want match "PNRR/Beneficiari" or "PNRR/Misure" even if
    // the feature "PNRR" is not in the publiccode.yml file.
    ret.push({ term: { [`publiccode.description.${lang}.features`]: 'pnrr' } });
  }

  return ret;
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
