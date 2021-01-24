import React, { useState, useContext } from 'react';
import { l10NLabels } from '../../utils/l10n.js';
import { CatalogueSort } from './CatalogueSort.js';
import { createUseStyles } from 'react-jss';
import { CatalogueFilters } from './CatalogueFilters.js';
import { CatalogueSearchBar } from './CatalogueSearchBar.js';
import { CatalogueFiltersTitle } from './CatalogueFiltersTitle.js';
import { queryContextState } from '../../contexts/searchContext.js';

const useStyle = createUseStyles({
  header: {
    fontSize: '3rem',
  },
  filters: {
    composes: 'row col-12 mb-5 d-lg-none',
    display: (expandFilter) => (expandFilter ? 'block' : 'none'),
  },
});

export const CatalogueSummary = React.memo(({ itemsCount }) => {
  console.log('CatalogueSummary');
  const { filterCategories, filterDevelopmentStatuses, filterIntendedAudiences, type } = useContext(queryContextState);
  const [expandFilter, setExpandFilter] = useState(false);
  const classes = useStyle(expandFilter);

  let totalAppliedFilters = filterCategories.length + filterIntendedAudiences.length + filterDevelopmentStatuses.length;
  if (type) {
    totalAppliedFilters++;
  }

  const handleExpandFilter = () => setExpandFilter(!expandFilter);

  return (
    <>
      <div className="text-center">
        <h1 className={classes.header}>{l10NLabels.software.catalogue}</h1>
        <div className="row"></div>
        <div className="col-lg-6 col-md-8 col-sm-10 mx-auto text-center">
          <CatalogueSearchBar />
        </div>
      </div>
      <div className="row border-bottom">
        <div className="row col-12 py-3 px-2 align-items-center text-center">
          <div className="col-3 font-weight-bold text-left">
            {itemsCount !== null && `${itemsCount} ${l10NLabels.software.results}`}
          </div>
          <div className="col-2 d-lg-none">
            <CatalogueFiltersTitle
              title={l10NLabels.software.filters}
              counter={totalAppliedFilters}
              showCollapsableIcon={true}
              onToogleExpandCollapse={handleExpandFilter}
            />
          </div>
          <div className="col-7 col-lg-9">
            <CatalogueSort />
          </div>
        </div>
        <div className={classes.filters}>
          <div className="col-10 m-auto">
            <CatalogueFilters />
          </div>
        </div>
      </div>
    </>
  );
});

CatalogueSummary.displayName = 'CatalogueSummary';
