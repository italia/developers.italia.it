import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { SearchContainer } from './components/Search/SearchContainer.js';
import { CatalogueContainer } from './components/Catalogue/CatalogueContainer.js';
import { CatalogueItem } from './components/Catalogue/CatalogueItem.js';

export const App = () => {
  const search = useRef(Array.from(document.getElementsByTagName('custom-search')));
  const catalogue = useRef(Array.from(document.getElementsByTagName('custom-catalogue')));
  const thumbnails = useRef(Array.from(document.getElementsByTagName('catalogue-item')));

  const renderThumbnail = (t) => {
    const props = Object.assign({}, ...Array.from(t.attributes, ({ name, value }) => ({ [name]: value })));

    return ReactDOM.createPortal(<CatalogueItem {...props} />, t);
  };

  return (
    <>
      {search.current[0] && ReactDOM.createPortal(<SearchContainer />, search.current[0])}
      {catalogue.current[0] && ReactDOM.createPortal(<CatalogueContainer />, catalogue.current[0])}
      {thumbnails.current.map((t) => renderThumbnail(t))}
    </>
  );
};
