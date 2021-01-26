import React, { useContext, useRef } from 'react';
import { CatalogueSummary } from './CatalogueSummary.js';
import { CatalogueItems } from './CatalogueItems.js';
import { useSearchEngine } from '../../hooks/useSearchEngine.js';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll.js';
import { searchContextState } from '../../contexts/searchContext.js';
import { SOFTWARE_OPEN, SOFTWARE_REUSE } from '../../utils/constants.js';

export const CatalogueView = React.memo(() => {
  console.log('CatalogueView');
  const { filterCategories, filterDevelopmentStatuses, filterIntendedAudiences, type } = useContext(searchContextState);
  let totalAppliedFilters = filterCategories.length + filterIntendedAudiences.length + filterDevelopmentStatuses.length;
  if ([SOFTWARE_OPEN, SOFTWARE_REUSE].includes(type)) {
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

CatalogueView.displayName = 'CatalogueView';
