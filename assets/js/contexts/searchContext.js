import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { ALL_SITE, RELEVANCE } from '../utils/constants.js';
import { serializeStateToQueryString } from '../utils/urlSearchParams.js';

const INCREMENT_PAGE = 'INCREMENT_PAGE';
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
const SET_FILTERS_CATEGORIES = 'SET_FILTERS_CATEGORIES';
const SET_FILTERS_INTENDED_AUDIENCES = 'SET_FILTERS_INTENDED_AUDIENCES';
const SET_FILTERS_DEVELOPMENT_STATUSES = 'SET_FILTERS_DEVELOPMENT_STATUSES';
const SET_SORT_BY = 'SET_SORT_BY';
const SET_TYPE = 'SET_TYPE';

export const searchContextState = React.createContext(null);
export const searchContextDispatch = React.createContext(null);

export const searchReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case SET_FILTERS_CATEGORIES:
      return {
        ...state,
        filterCategories: action.value,
        page: 0,
      };
    case SET_FILTERS_DEVELOPMENT_STATUSES:
      return {
        ...state,
        filterDevelopmentStatuses: action.value,
        page: 0,
      };
    case SET_FILTERS_INTENDED_AUDIENCES:
      return {
        ...state,
        filterIntendedAudiences: action.value,
        page: 0,
      };
    case SET_TYPE:
      return {
        ...state,
        type: action.value,
        page: 0,
      };
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.value,
        page: 0,
      };
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.value,
        page: 0,
      };
    default:
      return state;
  }
};

export const SearchProvider = ({
  initialCategories = [],
  initialDevelopmentStatuses = [],
  initialPage = 0,
  initialIntendedAudiences = [],
  initialSearchValue = '',
  initialSortBy = RELEVANCE,
  initialType = ALL_SITE,
  syncStateWithQueryString = false,
  children,
}) => {
  const [state, dispatch] = useReducer(searchReducer, {
    filterCategories: initialCategories,
    filterDevelopmentStatuses: initialDevelopmentStatuses,
    filterIntendedAudiences: initialIntendedAudiences,
    page: initialPage,
    searchValue: initialSearchValue,
    sortBy: initialSortBy,
    type: initialType,
  });

  syncStateWithQueryString && serializeStateToQueryString(state);

  return (
    <searchContextState.Provider value={state}>
      <searchContextDispatch.Provider value={dispatch}>{children}</searchContextDispatch.Provider>
    </searchContextState.Provider>
  );
};

SearchProvider.propTypes = {
  initialCategories: PropTypes.arrayOf(PropTypes.string),
  initialDevelopmentStatuses: PropTypes.arrayOf(PropTypes.string),
  initialPage: PropTypes.number,
  initialIntendedAudiences: PropTypes.arrayOf(PropTypes.string),
  initialSearchValue: PropTypes.string,
  initialSortBy: PropTypes.string,
  initialType: PropTypes.string,
  syncStateWithQueryString: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export const incrementPage = () => ({
  type: INCREMENT_PAGE,
});

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
  value: sortBy,
});

export const setSearchValue = (value) => ({
  type: SET_SEARCH_VALUE,
  value,
});
