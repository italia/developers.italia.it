import {
  SET_FILTERS_CATEGORIES,
  SET_FILTERS_DEVELOPMENT_STATUTES,
  SET_FILTERS_INTENDED_AUDIENCES,
  SET_SEARCH_TYPE,
  SET_SEARCH_VALUE,
  SET_SORT_BY,
} from '../actions.js';
import { initialCategories, initialSearchValue, initialSearchType, initialSort } from '../../services/searchEngine.js';

const initialState = {
  filterCategories: initialCategories,
  filterIntendedAudiences: [],
  filterDevelopmentStatuses: [],
  searchType: initialSearchType,
  searchValue: initialSearchValue,
  sortBy: initialSort ? { field: initialSort } : {},
};

console.log(initialState);

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_FILTERS_CATEGORIES:
      return {
        ...state,
        filterCategories: action.value,
      };
    case SET_FILTERS_DEVELOPMENT_STATUTES:
      return {
        ...state,
        filterDevelopmentStatuses: action.value,
      };
    case SET_FILTERS_INTENDED_AUDIENCES:
      return {
        ...state,
        filterIntendedAudiences: action.value,
      };
    case SET_SEARCH_TYPE:
      return {
        ...state,
        searchType: action.value,
      };
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.value,
      };
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.value,
      };
    default:
      return state;
  }
}
