import React from 'react';
import { getL10NLabels } from '../utils/l10n.js';
import { CatalogueSort } from './CatalogueSort.js';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  header: {
    fontSize: '3rem',
  },
});

export const CatalogueSummary = React.memo(({ itemCount }) => {
  console.log('CatalogueSummary');
  const classes = useStyle();
  const l10NLabels = getL10NLabels();
  const searchValue = useSelector((state) => state.query.searchValue);
  return (
    <div className="text-center">
      <h1 className={classes.header}>
        {searchValue ? `${l10NLabels.software.searched_for} ${searchValue}` : l10NLabels.software.catalogue}
      </h1>
      <div className="border-bottom py-4 row row-eq-height d-none d-md-flex align-items-center">
        <div className="d-flex justify-content-start col-md-6">
          <p className="font-weight-bold">{itemCount && `${itemCount} ${l10NLabels.software.results}`}</p>
        </div>
        <CatalogueSort />
      </div>
    </div>
  );
});

CatalogueSummary.displayName = 'CatalogueSummary';
