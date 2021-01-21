import React from 'react';
import { l10NLabels } from '../../utils/l10n.js';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  image: {
    minHeight: '25vw',
  },
});

export const CatalogueNoResults = React.memo(() => {
  console.log('CatalogueNoResults');
  const classes = useStyles();
  return (
    <div className="text-center mt-4">
      <img className={classes.image} src="/assets/images/serp_no%20results.svg" />
      <h1>{l10NLabels.software.no_results}</h1>
      <p className="font-serif content-text">{l10NLabels.software.retry_search}</p>
    </div>
  );
});

CatalogueNoResults.displayName = 'CatalogueNoResults';
