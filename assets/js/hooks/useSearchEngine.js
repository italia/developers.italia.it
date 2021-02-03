import { useContext, useEffect, useReducer, useRef } from 'react';
import { search } from '../services/searchEngine.js';
import { searchContextDispatch, searchContextState, incrementPage } from '../contexts/searchContext.js';

const ADD_ITEMS = 'ADD_ITEMS';
const SET_ITEMS = 'SET_ITEMS';
const SET_IS_LOADING = 'SET_IS_LOADING';

const initial = {
  isLoading: false,
  items: null,
  total: null,
};

const reducer = (state, action) => {
  if (action.type === ADD_ITEMS) {
    return {
      ...state,
      isLoading: false,
      items: [...state.items, ...action.value.items],
    };
  }

  if (action.type === SET_ITEMS) {
    return {
      isLoading: false,
      items: action.value.items,
      total: action.value.total,
    };
  }

  if (action.type === SET_IS_LOADING) {
    return {
      ...state,
      isLoading: true,
    };
  }
};

const areMoreItemsAvailable = (from, size, total) => {
  return from + size < total;
};

export const useSearchEngine = ({ pageSize } = { pageSize: 12 }) => {
  const [{ items, total, isLoading }, dispatch] = useReducer(reducer, initial);
  const dispatchGlobal = useContext(searchContextDispatch);
  const {
    filterCategories,
    filterDevelopmentStatuses,
    filterIntendedAudiences,
    page,
    type,
    searchValue,
    sortBy,
  } = useContext(searchContextState);
  // This feature is mainly used by the infiniteScroll to reload the previous items just after an user click on the browser back button
  const reloadItemsUntilPage = useRef(page > 0 ? page : false);
  // If we aren't in the "resume mode" the from is incremental
  const from = reloadItemsUntilPage.current ? 0 : page * pageSize;
  // If we aren't in the "resume mode" use the default page size
  const size = reloadItemsUntilPage.current ? (reloadItemsUntilPage.current + 1) * pageSize : pageSize;

  const fetchMore = () => {
    if (!isLoading && areMoreItemsAvailable(from, size, total)) {
      dispatchGlobal(incrementPage());
    }
  };

  useEffect(() => {
    const query = async () => {
      dispatch({ type: SET_IS_LOADING });

      const [results, total] = await search(type, {
        from,
        filters: {
          categories: filterCategories,
          developmentStatuses: filterDevelopmentStatuses,
          intendedAudiences: filterIntendedAudiences,
        },
        searchValue,
        sortBy,
        size,
      });

      dispatch({
        type: from === 0 ? SET_ITEMS : ADD_ITEMS,
        value: {
          items: results,
          total,
        },
      });

      reloadItemsUntilPage.current = false; // The "resume mode" is valid only fro one iteration. Starting from the next iteration the items fetching will return to act normally
    };
    query();
  }, [type, searchValue, filterCategories, filterDevelopmentStatuses, filterIntendedAudiences, sortBy, page]);

  return [items, total, fetchMore];
};
