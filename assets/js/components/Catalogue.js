import React from 'react';
import { CatalogueFilters } from './CatalogueFilters.js';
import { createUseStyles } from 'react-jss';
import { CatalogueView } from './CatalogueView.js';

const useStyle = createUseStyles({
  container: {
    composes: 'container',
    marginTop: '3.5rem',
    marginBottom: '6rem',
  },
});

export const Catalogue = () => {
  console.log('Catalogue');
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <div className="row">
        <div className="col-md-3 d-none d-md-block">
          <CatalogueFilters />
        </div>
        <div className="col-md-9">
          <CatalogueView />
        </div>
      </div>
    </div>
  );
};
