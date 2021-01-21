import React from 'react';
import { CatalogueItem } from './CatalogueItem.js';
import { CatalogueNoResults } from './CatalogueNoResults.js';

export const CatalogueItems = React.memo(({ items }) => {
  console.log('CatalogueItems');
  if (items.length === 0) return <CatalogueNoResults />;
  return (
    <div className="mt-sm-3 mt-md-5">
      <div className="row">
        {items.map((r) => (
          <CatalogueItem key={r.id} item={r} />
        ))}
      </div>
    </div>
  );
});

CatalogueItems.displayName = 'CatalogueItems';
