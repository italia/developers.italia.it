import React from 'react';
import { getL10NLabels } from '../l10nUtils.js';
import { CatalogueSort } from './CatalogueSort.js';
import { useSelector } from 'react-redux';

export const CatalogueSummary = React.memo(({ itemCount }) => {
  console.log('CatalogueSummary');
  const l10NLabels = getL10NLabels();
  const searchValue = useSelector((state) => state.query.searchValue);
  return (
    <div className="text-center">
      <h1 style={{ fontSize: '3rem' }}>
        {searchValue ? `${l10NLabels.software.searched_for} ${searchValue}` : l10NLabels.software.catalogue}
      </h1>
      <div className="abstract-sorting row row-eq-height d-none d-md-flex">
        <div className="results-number col-md-6 d-flex">
          <p>
            {itemCount} {l10NLabels.software.results}
          </p>
        </div>
        <CatalogueSort />
      </div>
    </div>
  );
});

CatalogueSummary.displayName = 'CatalogueSummary';
