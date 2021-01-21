import {
  SET_FILTERS_CATEGORIES,
  SET_FILTERS_DEVELOPMENT_STATUSES,
  SET_FILTERS_INTENDED_AUDIENCES,
  SET_FROM,
  SET_SEARCH_VALUE,
  SET_SORT_BY,
  SET_TYPE,
} from '../actions.js';
import { initialCategories, initialType, initialSearchValue, initialSort } from '../../utils/urlSearchParams.js';

const initialState = {
  filterCategories: initialCategories,
  filterDevelopmentStatuses: [],
  filterIntendedAudiences: [],
  from: 0,
  type: initialType,
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
    case SET_TYPE:
      return {
        ...state,
        type: action.value,
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
