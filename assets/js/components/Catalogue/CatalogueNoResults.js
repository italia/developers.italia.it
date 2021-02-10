import React from 'react';
import { createUseStyles } from 'react-jss';
import { l10NLabels } from '../../utils/l10n.js';

const useStyles = createUseStyles({
  image: {
    minHeight: '25vw',
  },
});

export const CatalogueNoResults = React.memo(() => {
  const classes = useStyles();
  return (
    <div className="text-center mt-4" data-testid="catalogue-no-results">
      <img className={classes.image} src="/assets/images/serp_no%20results.svg" />
      <h1>{l10NLabels.software.no_results}</h1>
      <p className="font-serif content-text">{l10NLabels.software.retry_search}</p>
    </div>
  );
});

CatalogueNoResults.displayName = 'CatalogueNoResults';
