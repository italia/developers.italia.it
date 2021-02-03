import React from 'react';
import { CatalogueFiltersContainer } from './CatalogueFiltersContainer.js';
import { createUseStyles } from 'react-jss';
import { CatalogueView } from './CatalogueView.js';
import { SearchProvider } from '../../contexts/searchContext.js';
import {
  initialCategories,
  initialDevelopmentStatuses,
  initialIntendedAudiences,
  initialPage,
  initialSearchValue,
  initialSortBy,
  initialType,
} from '../../utils/urlSearchParams.js';
import { ALL_CATALOGUE, RELEVANCE } from '../../utils/constants.js';

const useStyle = createUseStyles({
  container: {
    composes: 'container',
    marginTop: '2.5rem',
    marginBottom: '6rem',
  },
});

export const CatalogueContainer = () => {
  const classes = useStyle();

  return (
    <SearchProvider
      initialCategories={initialCategories}
      initialDevelopmentStatuses={initialDevelopmentStatuses}
      initialPage={Number(initialPage)}
      initialIntendedAudiences={initialIntendedAudiences}
      initialSearchValue={initialSearchValue}
      initialSortBy={initialSortBy ?? RELEVANCE}
      initialType={initialType ?? ALL_CATALOGUE}
      syncStateWithQueryString={true}
    >
      <article className={classes.container} data-testid="catalogue-container">
        <div className="row">
          <section className="col-lg-3 d-none d-lg-flex flex-column">
            <CatalogueFiltersContainer prefixName="desktop_view" />
          </section>
          <section className="col-12 col-lg-9">
            <CatalogueView />
          </section>
        </div>
      </article>
    </SearchProvider>
  );
};
