import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { l10NLabels } from '../../utils/l10n.js';
import { CatalogueSort } from './CatalogueSort.js';
import { CatalogueFiltersContainer } from './CatalogueFiltersContainer.js';
import { CatalogueFiltersTitle } from './CatalogueFiltersTitle.js';
import { CatalogueHeader } from './CatalogueHeader.js';

const useStyle = createUseStyles({
  filters: {
    composes: 'row col-12 mb-5 d-lg-none',
    display: (expandFilter) => (expandFilter ? 'block' : 'none'),
  },
});

export const CatalogueSummary = React.memo(({ itemsCount, totalAppliedFilters }) => {
  const [expandFilter, setExpandFilter] = useState(false);
  const classes = useStyle(expandFilter);

  const handleExpandFilter = () => setExpandFilter(!expandFilter);

  return (
    <>
      <CatalogueHeader />
      <div className="row">
        <div className="row col-12 py-3 px-2 align-items-center text-center">
          <div
            className="col-3 font-weight-bold text-left"
            data-testid="counter-summary"
          >{`${itemsCount} ${l10NLabels.software.results}`}</div>
          <div className="col-3 col-md-2 d-lg-none">
            <CatalogueFiltersTitle
              title={l10NLabels.software.filters}
              counter={totalAppliedFilters}
              showCollapsableIcon={true}
              onToogleExpandCollapse={handleExpandFilter}
            />
          </div>
          <div className="col-6 col-md-7 col-lg-9">
            <CatalogueSort />
          </div>
        </div>
        <div className={classes.filters}>
          <div className="col-10 m-auto">
            <CatalogueFiltersContainer prefixName="mobile_view" />
          </div>
        </div>
      </div>
    </>
  );
});

CatalogueSummary.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  totalAppliedFilters: PropTypes.number.isRequired,
};

CatalogueSummary.displayName = 'CatalogueSummary';
