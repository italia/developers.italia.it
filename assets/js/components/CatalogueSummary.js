import React from 'react';
import { l10NLabels } from '../utils/l10n.js';
import { CatalogueSort } from './CatalogueSort.js';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  header: {
    fontSize: '3rem',
  },
});

export const CatalogueSummary = React.memo(({ itemsCount }) => {
  console.log('CatalogueSummary');
  const classes = useStyle();
  const searchValue = useSelector((state) => state.query.searchValue);
  return (
    <div className="text-center">
      <h1 className={classes.header}>
        {searchValue ? `${l10NLabels.software.searched_for} ${searchValue}` : l10NLabels.software.catalogue}
      </h1>
      <div className="border-bottom py-4 row align-items-center">
        <div className="col-3">
          <p className="font-weight-bold">{itemsCount && `${itemsCount} ${l10NLabels.software.results}`}</p>
        </div>
        <CatalogueSort />
      </div>
    </div>
  );
});

CatalogueSummary.displayName = 'CatalogueSummary';
