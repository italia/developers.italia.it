import React, { useEffect, useRef } from 'react';
import { CatalogueSummary } from './CatalogueSummary.js';
import { CatalogueItems } from './CatalogueItems.js';
import { useSearchCatalogue } from '../../hooks/useSearchCatalogue.js';

export const CatalogueView = React.memo(() => {
  console.log('CatalogueView');

  const infiniteScrollTrigger = useRef(null);
  // partialItems: they are partial because we use pagination.
  const [partialItems, itemsCount, fetchMore] = useSearchCatalogue();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          fetchMore();
        }
      },
      {
        root: null, // window by default
        rootMargin: '0px',
        threshold: 0.25,
      }
    );
    if (infiniteScrollTrigger && infiniteScrollTrigger.current) {
      observer.observe(infiniteScrollTrigger.current);
    }

    return () => observer.unobserve(infiniteScrollTrigger.current);
  }, [infiniteScrollTrigger, fetchMore]);

  return (
    <>
      <CatalogueSummary itemsCount={itemsCount} />
      {partialItems !== null && <CatalogueItems items={partialItems} />}
      <div ref={infiniteScrollTrigger}></div>
    </>
  );
});

CatalogueView.displayName = 'CatalogueView';
