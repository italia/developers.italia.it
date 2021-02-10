import React from 'react';
import PropTypes from 'prop-types';
import { CatalogueItem } from './CatalogueItem.js';
import { CatalogueNoResults } from './CatalogueNoResults.js';
import { searchItemProptypes } from '../../utils/proptypes.js';
import { useScrollIntoView } from '../../hooks/useScrollIntoView.js';

export const CatalogueItems = React.memo(({ items }) => {
  useScrollIntoView({
    observableSelector: "[data-class='catalogue-item']",
    focusElementId: location.hash?.substring(1),
  });

  if (items.length === 0) return <CatalogueNoResults />;

  const itemsList = items.map((r) => (
    <React.Fragment key={r.id}>
      <CatalogueItem key={r.id} item={r} />
      <div className="dropdown-divider col-12 d-md-none"></div>
    </React.Fragment>
  ));
  return (
    <div className="mt-sm-3 mt-md-5 row" data-testid="catalogue-items">
      {itemsList}
    </div>
  );
});

CatalogueItems.propTypes = {
  items: PropTypes.arrayOf(searchItemProptypes),
};

CatalogueItems.displayName = 'CatalogueItems';
