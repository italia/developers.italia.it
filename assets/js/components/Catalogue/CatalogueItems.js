import React from 'react';
import PropTypes from 'prop-types';
import { searchItemProptypes } from '../../utils/proptypes.js';
import { useScrollIntoView } from '../../hooks/useScrollIntoView.js';
import { CatalogueItem } from './CatalogueItem.js';
import { CatalogueNoResults } from './CatalogueNoResults.js';

export const CatalogueItems = React.memo(({ items }) => {
  useScrollIntoView({
    observableSelector: "[data-class='catalogue-item']",
    focusElementId: location.hash?.substring(1),
  });

  if (items.length === 0) {
    return <CatalogueNoResults />;
  }

  const itemsList = items.map((r) => (
    <React.Fragment key={r.id}>
      <div className="mx-auto col-sm-11 col-md-6 col-lg-4 col-xl-3 p-3 d-flex flex-column">
        <CatalogueItem key={r.id} {...r} />
      </div>
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
