import React from 'react';
import PropTypes from 'prop-types';
import { ALL_SITE } from '../utils/constants.js';

const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
const SET_FILTERS_CATEGORIES = 'SET_FILTERS_CATEGORIES';
const SET_FILTERS_INTENDED_AUDIENCES = 'SET_FILTERS_INTENDED_AUDIENCES';
const SET_FILTERS_DEVELOPMENT_STATUSES = 'SET_FILTERS_DEVELOPMENT_STATUSES';
const SET_FROM = 'SET_FROM';
const SET_SORT_BY = 'SET_SORT_BY';
const SET_TYPE = 'SET_TYPE';

export const searchContextState = React.createContext(null);
export const searchContextDispatch = React.createContext(null);

const searchReducer = (state, action) => {
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
};

export const SearchProvider = ({
  initialCategories = [],
  initialType = ALL_SITE,
  initialSearchValue = '',
  initialSortBy = {},
  children,
}) => {
  const [state, dispatch] = React.useReducer(searchReducer, {
    filterCategories: initialCategories,
    filterDevelopmentStatuses: [],
    filterIntendedAudiences: [],
    from: 0,
    type: initialType,
    searchValue: initialSearchValue,
    sortBy: initialSortBy,
  });

  return (
    <searchContextState.Provider value={state}>
      <searchContextDispatch.Provider value={dispatch}>{children}</searchContextDispatch.Provider>
    </searchContextState.Provider>
  );
};

SearchProvider.propTypes = {
  initialCategories: PropTypes.arrayOf(PropTypes.string),
  initialType: PropTypes.string,
  initialSearchValue: PropTypes.string,
  initialSortBy: PropTypes.shape({
    field: PropTypes.string,
  }),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

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
