import React from 'react';
import { CatalogueFilters } from './CatalogueFilters.js';
import { createUseStyles } from 'react-jss';
import { CatalogueView } from './CatalogueView.js';

const useStyle = createUseStyles({
  container: {
    composes: 'container',
    marginTop: '2.5rem',
    marginBottom: '6rem',
  },
});

export const Catalogue = () => {
  console.log('Catalogue');
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <div className="row">
        <div className="col-lg-3 d-none d-lg-flex flex-column">
          <CatalogueFilters />
        </div>
        <div className="col-12 col-lg-9">
          <CatalogueView />
        </div>
      </div>
    </div>
  );
};
