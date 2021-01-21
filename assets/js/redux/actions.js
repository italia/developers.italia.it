export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
export const SET_FILTERS_CATEGORIES = 'SET_FILTERS_CATEGORIES';
export const SET_FILTERS_INTENDED_AUDIENCES = 'SET_FILTERS_INTENDED_AUDIENCES';
export const SET_FILTERS_DEVELOPMENT_STATUSES = 'SET_FILTERS_DEVELOPMENT_STATUSES';
export const SET_FROM = 'SET_FROM';
export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_TYPE = 'SET_TYPE';

export const setFilterCategories = (categories) => ({ type: SET_FILTERS_CATEGORIES, value: categories });
export const setFilterDevelopmentStatuses = (statuses) => ({ type: SET_FILTERS_DEVELOPMENT_STATUSES, value: statuses });
export const setFilterIntendedAudience = (intendedAudience) => ({
  type: SET_FILTERS_INTENDED_AUDIENCES,
  value: intendedAudience,
});
export const setType = (type) => ({
  type: SET_TYPE,
  value: type,
});
export const setSortBy = (sortBy) => ({
  type: SET_SORT_BY,
  value: { field: sortBy },
});

export const setFrom = (from) => ({
  type: SET_FROM,
  value: from,
});
export const setSearchValue = (value) => ({
  type: SET_SEARCH_VALUE,
  value,
});
