import { useContext, useEffect, useMemo, useReducer, useRef } from 'react';
import { search } from '../services/searchEngine.js';
import { searchContextDispatch, searchContextState, setFrom } from '../contexts/searchContext.js';

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

// The resume mode is used by the infiniteScroll to resume the previous view when the user click on the browser back button
const isResumeMode = (initialFrom) => {
  return initialFrom !== null && initialFrom > 0;
};

export const useSearchEngine = ({ pageSize } = { pageSize: 12 }) => {
  const [{ items, total, isLoading }, dispatch] = useReducer(reducer, initial);
  const dispatchGlobal = useContext(searchContextDispatch);
  const {
    filterCategories,
    filterDevelopmentStatuses,
    filterIntendedAudiences,
    from,
    type,
    searchValue,
    sortBy,
  } = useContext(searchContextState);
  const size = useRef(pageSize);
  const previousFrom = useRef(from); // previousFrom > 0 means restart fetching document from previousFrom + pageSize
  console.log(previousFrom.current);

  const fetchMore = () => {
    if (!isLoading && from + size.current < total) {
      dispatchGlobal(setFrom(from + size.current));
    }
  };

  useEffect(() => {
    const query = async () => {
      dispatch({ type: SET_IS_LOADING });
      console.log('resume', isResumeMode(previousFrom.current));

      const [results, total] = await search(type, {
        from: isResumeMode(previousFrom.current) ? 0 : from, // In resumeMode always start from zero
        filters: {
          categories: filterCategories,
          developmentStatuses: filterDevelopmentStatuses,
          intendedAudiences: filterIntendedAudiences,
        },
        searchValue,
        sortBy,
        size: isResumeMode(previousFrom.current) ? previousFrom.current + size.current : size.current, // In resumeMode load all the items until resumeFrom plus the items in the current page
      });

      dispatch({
        type: isResumeMode(previousFrom.current) ? SET_ITEMS : from > 0 ? ADD_ITEMS : SET_ITEMS,
        value: {
          items: results,
          total,
        },
      });

      previousFrom.current = null; // Invalidate resumeMode. Starting from the next iteration the items fetch will return to act normally
    };
    query();
  }, [type, searchValue, filterCategories, filterDevelopmentStatuses, filterIntendedAudiences, sortBy, from]);

  return [items, total, fetchMore];
};
