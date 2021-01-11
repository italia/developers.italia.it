import React from 'react';
import ReactDOM from 'react-dom';
import { SearchCatalogue } from './components/SearchCatalogue.js';
import { CatalogueResults } from './components/CatalogueResults.js';

console.log('qui');

if (document.getElementById('search-root')) {
  console.log('quo');
  ReactDOM.render(
    <React.StrictMode>
      <SearchCatalogue />
    </React.StrictMode>,
    document.getElementById('search-root')
  );
}

if (document.getElementById('catalogue-root')) {
  console.log('qua');
  ReactDOM.render(
    <React.StrictMode>
      <CatalogueResults />
    </React.StrictMode>,
    document.getElementById('catalogue-root')
  );
}

