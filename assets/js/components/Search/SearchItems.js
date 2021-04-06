import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { searchItemProptypes } from '../../utils/proptypes.js';
import { l10NLabels } from '../../utils/l10n.js';
import { SearchItem } from './SearchItem.js';

const useStyles = createUseStyles({
  noResults: {
    color: '#656566',
  },
});

export const SearchItems = React.memo(({ items }) => {
  const classes = useStyles();
  if (items.length === 0) {
    return (
      <div className="form-group" data-testid="search-modal-no-results">
        <h5 className={classes.noResults}>{l10NLabels.software.no_results}</h5>
      </div>
    );
  }

  return (
    <div className="form-group" data-testid="search-modal-items">
      {items.map((i) => (
        <SearchItem key={i.id} item={i} />
      ))}
    </div>
  );
});

SearchItems.propTypes = {
  items: PropTypes.arrayOf(searchItemProptypes),
};

SearchItems.displayName = 'SearchItems';
