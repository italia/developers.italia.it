import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { SearchContainer } from './components/Search/SearchContainer.js';
import { CatalogueContainer } from './components/Catalogue/CatalogueContainer.js';

export const App = () => {
  const search = useRef([]);
  const catalogue = useRef([]);
  search.current = Array.from(document.getElementsByTagName('search'));
  catalogue.current = Array.from(document.getElementsByTagName('catalogue'));
  return (
    <>
      {search.current[0] && ReactDOM.createPortal(<SearchContainer />, search.current[0])}
      {catalogue.current[0] && ReactDOM.createPortal(<CatalogueContainer />, catalogue.current[0])}
    </>
  );
};
