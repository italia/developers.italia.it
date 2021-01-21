import React, { useState } from 'react';
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
    composes: 'icon icon-primary',
    minWidth: '40px',
    minHeight: '40px',
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
      <div className={classes.title} role="button" onClick={handleToogleShowAll}>
        <div className="d-flex align-items-center">
          <span>{title}</span>
          {counter > 0 && <span className="ml-2 badge badge-primary">{counter}</span>}
        </div>
        {showCollapsableIcon && (
          <svg className={classes.expandIcon}>
            <use xlinkHref={`/assets/svg/sprite.svg#${expandIcon ? 'it-expand' : 'it-collapse'}`}></use>
          </svg>
        )}
      </div>
    </>
  );
});

CatalogueFiltersTitle.displayName = 'CatalogueFiltersTitle';
