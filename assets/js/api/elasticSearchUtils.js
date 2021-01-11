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
  const { field } = sortBy;
  if (field === 'name') {
    return [
      {
        'publiccode.description.it.localizedName.keyword': { order: getOrder(sortBy), unmapped_type: 'keyword' },
      },
    ];
  }
  if (field === 'vitality') {
    return [
      {
        vitalityScore: { order: getOrder(sortBy) },
      },
    ];
  }
  if (field === 'release_date') {
    return [
      {
        'publiccode.releaseDate': { order: getOrder(sortBy) },
      },
    ];
  }

  return [];
};

const getOrder = ({ asc }) => (asc ? 'asc' : 'desc');
