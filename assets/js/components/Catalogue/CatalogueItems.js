import React from 'react';
import PropTypes from 'prop-types';
import { CatalogueItem } from './CatalogueItem.js';
import { CatalogueNoResults } from './CatalogueNoResults.js';
import { searchItemProptypes } from '../../services/searchEngine.js';

export const CatalogueItems = React.memo(({ items }) => {
  if (items.length === 0) return <CatalogueNoResults />;
  return (
    <div className="mt-sm-3 mt-md-5 row">
      {items.map((r) => (
        <CatalogueItem key={r.id} item={r} />
      ))}
    </div>
  );
});

CatalogueItems.propTypes = {
  items: PropTypes.arrayOf(searchItemProptypes),
};

CatalogueItems.displayName = 'CatalogueItems';
