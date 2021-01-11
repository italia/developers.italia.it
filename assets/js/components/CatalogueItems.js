import React from 'react';
import { CatalogueItem } from './CatalogueItem.js';

export const CatalogueItems = React.memo(({items}) => {
  console.log('CatalogueItems');
  return (
    <div className="container list-item-sorting">
      <div className="row row-eq-height">
        {items.map((r) => (
          <CatalogueItem key={r.id} item={r} />
        ))}
      </div>
    </div>
  );
});

CatalogueItems.displayName = 'CatalogueItems';
