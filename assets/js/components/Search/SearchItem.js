import React from 'react';
import { searchItemProptypes } from '../../services/searchEngine.js';

export const SearchItem = ({ item }) => {
  console.log('SearchItem');
  return (
    <div>
      <a className="d-block" href={item.url}>
        <span className={`results category icon ${item.icon}`}>{item.name}</span>
        <span>{item.category}</span>
      </a>
    </div>
  );
};

SearchItem.propTypes = {
  item: searchItemProptypes,
};
