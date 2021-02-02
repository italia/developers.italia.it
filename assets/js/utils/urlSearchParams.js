const urlSearchParams = new URLSearchParams(window.location.search);
export const initialSearchValue = urlSearchParams.get('search_value');
export const initialType = urlSearchParams.get('type');
export const initialSortBy = urlSearchParams.get('sort_by');
export const initialCategories = urlSearchParams.getAll('categories');
export const initialDevelopmentStatuses = urlSearchParams.getAll('development_statuses');
export const initialIntendedAudiences = urlSearchParams.getAll('intended_audiences');

export const serializeStateToQueryString = ({
  filterCategories,
  filterDevelopmentStatuses,
  filterIntendedAudiences,
  from,
  type,
  searchValue,
  sortBy,
}) => {
  const urlSearchParams = new URLSearchParams();
  filterCategories.forEach((f) => urlSearchParams.append('categories', f));
  filterDevelopmentStatuses.forEach((f) => urlSearchParams.append('development_statuses', f));
  filterIntendedAudiences.forEach((f) => urlSearchParams.append('intended_audiences', f));
  urlSearchParams.set('type', type);
  urlSearchParams.set('sort_by', sortBy);
  searchValue && urlSearchParams.set('search_value', searchValue);
  history.pushState(null, null, '?' + urlSearchParams.toString());
};
