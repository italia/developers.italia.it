import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { SearchContainer } from './components/Search/SearchContainer.js';
import { CatalogueContainer } from './components/Catalogue/CatalogueContainer.js';
import { PubliccodeBadge } from './components/PubliccodeBadge.js';

export const App = () => {
  const search = useRef([]);
  const catalogue = useRef([]);
  search.current = Array.from(document.getElementsByTagName('custom-search'));
  catalogue.current = Array.from(document.getElementsByTagName('custom-catalogue'));
  const publiccodeBadge = useRef(Array.from(document.getElementsByTagName('publiccode-badge')));

  const renderCustomElement = (t, Element) => {
    const props = Object.assign({}, ...Array.from(t.attributes, ({ name, value }) => ({ [name]: value })));

    return ReactDOM.createPortal(<Element {...props} />, t);
  };

  return (
    <>
      {search.current[0] && ReactDOM.createPortal(<SearchContainer />, search.current[0])}
      {catalogue.current[0] && ReactDOM.createPortal(<CatalogueContainer />, catalogue.current[0])}
      {publiccodeBadge.current.map((p) => renderCustomElement(p, PubliccodeBadge))}
    </>
  );
};
