import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Badge } from 'design-react-kit';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  title: {
    minHeight: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'var(--white)',
    textTransform: 'uppercase',
    fontWeight: '600',
    userSelect: 'none',
  },
  expandIcon: {
    minWidth: '32px',
    minHeight: '32px',
  },
});

export const CatalogueFiltersTitle = React.memo(({ title, counter, showCollapsableIcon, onToogleExpandCollapse }) => {
  const classes = useStyles();
  const [expandIcon, setExpandIcon] = useState(true);

  const handleToogleShowAll = () => {
    setExpandIcon(!expandIcon);
    onToogleExpandCollapse();
  };

  return (
    <>
      <div className={classes.title} role="button" onClick={handleToogleShowAll} data-testid="catalogue-filters-title">
        <div className="d-flex align-items-center">
          <span>{title}</span>
          {counter > 0 && (
            <Badge className="ml-2" tag="span" pill color="primary" data-testid="counter">
              {counter}
            </Badge>
          )}
        </div>
        {showCollapsableIcon && (
          <Icon color="primary" icon={expandIcon ? 'it-expand' : 'it-collapse'} className={classes.expandIcon} />
        )}
      </div>
    </>
  );
});

CatalogueFiltersTitle.propTypes = {
  title: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
  showCollapsableIcon: PropTypes.bool.isRequired,
  onToogleExpandCollapse: PropTypes.func.isRequired,
};

CatalogueFiltersTitle.displayName = 'CatalogueFiltersTitle';
