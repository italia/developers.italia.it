// Initial state for the catalogue search
const urlSearchParams = new URLSearchParams(window.location.search);
export const initialSearchValue = urlSearchParams.get('keyword');
export const initialSearchType = urlSearchParams.get('type');
export const initialSort = urlSearchParams.get('sort');
export const initialCategories = urlSearchParams.getAll('categories');
