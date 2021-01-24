import React from 'react';
import { CatalogueFilters } from './CatalogueFilters.js';
import { createUseStyles } from 'react-jss';
import { CatalogueView } from './CatalogueView.js';
import { SearchProvider } from '../../contexts/searchContext.js';
import { initialCategories, initialSearchValue, initialSort, initialType } from '../../utils/urlSearchParams.js';

const useStyle = createUseStyles({
  container: {
    composes: 'container',
    marginTop: '2.5rem',
    marginBottom: '6rem',
  },
});

const initialState = {
  filterCategories: initialCategories,
  filterDevelopmentStatuses: [],
  filterIntendedAudiences: [],
  from: 0,
  type: initialType,
  searchValue: initialSearchValue,
  sortBy: initialSort ? { field: initialSort } : {},
};

export const Catalogue = () => {
  console.log('Catalogue');
  const classes = useStyle();

  return (
    <SearchProvider value={initialState}>
      <div className={classes.container}>
        <div className="row">
          <div className="col-lg-3 d-none d-lg-flex flex-column">
            <CatalogueFilters />
          </div>
          <div className="col-12 col-lg-9">
            <CatalogueView />
          </div>
        </div>
      </div>
    </SearchProvider>
  );
};
