import React, { useContext, useRef } from 'react';
import { CatalogueSummary } from './CatalogueSummary.js';
import { CatalogueItems } from './CatalogueItems.js';
import { useSearchEngine } from '../../hooks/useSearchEngine.js';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll.js';
import { searchContextState } from '../../contexts/searchContext.js';

export const Catalogue = React.memo(() => {
  console.log('Catalogue');
  const { filterCategories, filterDevelopmentStatuses, filterIntendedAudiences, type } = useContext(searchContextState);
  let totalAppliedFilters = filterCategories.length + filterIntendedAudiences.length + filterDevelopmentStatuses.length;
  if (type) {
    totalAppliedFilters++;
  }

  const infiniteScrollTrigger = useRef(null);
  // partialItems: they are partial because we use pagination.
  const [partialItems, itemsCount, fetchMore] = useSearchEngine();
  useInfiniteScroll({
    infiniteScrollTrigger,
    fetchMore,
  });

  return (
    <>
      {itemsCount !== null && <CatalogueSummary itemsCount={itemsCount} totalAppliedFilters={totalAppliedFilters} />}
      {partialItems !== null && <CatalogueItems items={partialItems} />}
      <div ref={infiniteScrollTrigger}></div>
    </>
  );
});

Catalogue.displayName = 'Catalogue';
