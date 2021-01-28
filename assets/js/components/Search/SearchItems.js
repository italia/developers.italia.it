import React from 'react';
import PropTypes from 'prop-types';
import { SearchItem } from './SearchItem.js';
import { createUseStyles } from 'react-jss';
import { searchItemProptypes } from '../../utils/proptypes.js';

const useStyles = createUseStyles({
  noResults: {
    color: '#656566',
  },
});

export const SearchItems = React.memo(({ items }) => {
  const classes = useStyles();
  const itemList =
    items.length === 0 ? (
      <h5 className={classes.noResults}>Nessun risultato trovato</h5>
    ) : (
      items.map((i) => <SearchItem key={i.id} item={i} />)
    );
  return <div className="form-group">{itemList}</div>;
});

SearchItems.propTypes = {
  items: PropTypes.arrayOf(searchItemProptypes),
};

SearchItems.displayName = 'SearchItems';
