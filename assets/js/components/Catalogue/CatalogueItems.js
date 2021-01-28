import React from 'react';
import PropTypes from 'prop-types';
import { CatalogueItem } from './CatalogueItem.js';
import { CatalogueNoResults } from './CatalogueNoResults.js';
import { searchItemProptypes } from '../../utils/proptypes.js';

export const CatalogueItems = React.memo(({ items }) => {
  if (items.length === 0) return <CatalogueNoResults />;
  return (
    <div className="mt-sm-3 mt-md-5 row" data-testid="catalogue-items">
      {items.map((r) => (
        <React.Fragment key={r.id}>
          <CatalogueItem key={r.id} item={r} />
          <div className="dropdown-divider col-12 d-md-none"></div>
        </React.Fragment>
      ))}
    </div>
  );
});

CatalogueItems.propTypes = {
  items: PropTypes.arrayOf(searchItemProptypes),
};

CatalogueItems.displayName = 'CatalogueItems';
