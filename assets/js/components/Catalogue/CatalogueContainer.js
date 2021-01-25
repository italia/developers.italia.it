import React from 'react';
import { CatalogueFilters } from './CatalogueFilters.js';
import { createUseStyles } from 'react-jss';
import { Catalogue } from './Catalogue.js';
import { SearchProvider } from '../../contexts/searchContext.js';
import { initialCategories, initialSearchValue, initialSort, initialType } from '../../utils/urlSearchParams.js';
import { ALL_CATALOGUE } from '../../utils/constants.js';

const useStyle = createUseStyles({
  container: {
    composes: 'container',
    marginTop: '2.5rem',
    marginBottom: '6rem',
  },
});

const initialSortBy = initialSort ? { field: initialSort } : {};

export const CatalogueContainer = () => {
  console.log('CatalogueContainer');
  const classes = useStyle();

  return (
    <SearchProvider
      initialCategories={initialCategories}
      initialSearchValue={initialSearchValue}
      initialSortBy={initialSortBy}
      initialType={initialType ?? ALL_CATALOGUE}
    >
      <article className={classes.container}>
        <div className="row">
          <section className="col-lg-3 d-none d-lg-flex flex-column">
            <CatalogueFilters />
          </section>
          <section className="col-12 col-lg-9">
            <Catalogue />
          </section>
        </div>
      </article>
    </SearchProvider>
  );
};
