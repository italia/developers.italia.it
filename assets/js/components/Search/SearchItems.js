import React from 'react';
import PropTypes from 'prop-types';
import { searchItemProptypes } from '../../services/searchEngine.js';
import { SearchItem } from './SearchItem.js';

export const SearchItems = React.memo(({ items }) => {
  console.log('SearchItems');
  return (
    <div>
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
