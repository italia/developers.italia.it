import React from 'react';
import PropTypes from 'prop-types';
import { searchItemProptypes } from '../../services/searchEngine.js';
import { SearchItem } from './SearchItem.js';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  noResults: {
    color: '#656566',
  },
});

export const SearchItems = React.memo(({ items }) => {
  console.log('SearchItems');
  const classes = useStyles();
  const itemList =
    items.length === 0 ? (
      <h5 className={classes.noResults}>Nessun risultato trovato</h5>
    ) : (
      items.map((i) => <SearchItem key={i.id} item={i} />)
    );
  console.log(itemList);
  return <div className="form-group">{itemList}</div>;
});

SearchItems.propTypes = {
  items: PropTypes.arrayOf(searchItemProptypes),
};

SearchItems.displayName = 'SearchItems';
