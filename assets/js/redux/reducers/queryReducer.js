import {
  SET_FILTERS_CATEGORIES,
  SET_FILTERS_DEVELOPMENT_STATUSES,
  SET_FILTERS_INTENDED_AUDIENCES,
  SET_FROM,
  SET_SEARCH_TYPE,
  SET_SEARCH_VALUE,
  SET_SORT_BY,
} from '../actions.js';
import { initialCategories, initialSearchType, initialSearchValue, initialSort } from '../../utils/urlSearchParams.js';

const initialState = {
  filterCategories: initialCategories,
  filterIntendedAudiences: [],
  filterDevelopmentStatuses: [],
  from: 0,
  searchType: initialSearchType,
  searchValue: initialSearchValue,
  sortBy: initialSort ? { field: initialSort } : {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_FILTERS_CATEGORIES:
      return {
        ...state,
        filterCategories: action.value,
        from: 0,
      };
    case SET_FILTERS_DEVELOPMENT_STATUSES:
      return {
        ...state,
        filterDevelopmentStatuses: action.value,
        from: 0,
      };
    case SET_FILTERS_INTENDED_AUDIENCES:
      return {
        ...state,
        filterIntendedAudiences: action.value,
        from: 0,
      };
    case SET_FROM:
      return {
        ...state,
        from: action.value,
      };
    case SET_SEARCH_TYPE:
      return {
        ...state,
        searchType: action.value,
        from: 0,
      };
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.value,
        from: 0,
      };
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.value,
        from: 0,
      };
    default:
      return state;
  }
}
