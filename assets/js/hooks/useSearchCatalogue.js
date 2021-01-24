import { useContext, useEffect, useReducer, useCallback, useRef } from 'react';
import { search } from '../services/searchEngine.js';
import { queryContextDispatch, queryContextState, setFrom } from '../contexts/searchContext.js';

const initial = {
  isLoading: false,
  items: null,
  total: null,
};

const reducer = (state, action) => {
  if (action.type === 'ADD_ITEMS') {
    return {
      ...state,
      isLoading: false,
      items: [...state.items, ...action.value.items],
    };
  }

  if (action.type === 'SET_ITEMS') {
    return {
      isLoading: false,
      items: action.value.items,
      total: action.value.total,
    };
  }

  if (action.type === 'SET_IS_LOADING') {
    return {
      ...state,
      isLoading: true,
    };
  }
};

export const useSearchCatalogue = ({ pageSize } = { pageSize: 12 }) => {
  const [{ items, total, isLoading }, dispatch] = useReducer(reducer, initial);
  const size = useRef(pageSize);
  const dispatchGlobal = useContext(queryContextDispatch);
  const {
    filterCategories,
    filterDevelopmentStatuses,
    filterIntendedAudiences,
    from,
    type,
    searchValue,
    sortBy,
  } = useContext(queryContextState);

  const fetchMore = useCallback(() => {
    if (!isLoading && from + size.current < total) {
      dispatchGlobal(setFrom(from + size.current));
    }
  }, [from, isLoading, dispatchGlobal]);

  useEffect(() => {
    const query = async () => {
      dispatch({ type: 'SET_IS_LOADING' });
      const [results, total] = await search(type, {
        from,
        filters: {
          categories: filterCategories,
          developmentStatuses: filterDevelopmentStatuses,
          intendedAudiences: filterIntendedAudiences,
        },
        searchValue,
        sortBy,
        size: size.current,
      });
      dispatch({
        type: from === 0 ? 'SET_ITEMS' : 'ADD_ITEMS',
        value: {
          items: results,
          total,
        },
      });
    };
    query();
  }, [type, searchValue, filterCategories, filterDevelopmentStatuses, filterIntendedAudiences, sortBy, from]);

  return [items, total, fetchMore];
};
