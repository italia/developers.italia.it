import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { Search } from './components/Search.js';
import { Catalogue } from './components/Catalogue.js';
import { Provider } from 'react-redux';
import store from './redux/store.js';

// TODO: refactor this with something like CustomElementConnector
export const App = () => {
  const searchElements = useRef([]);
  const catalogueElements = useRef([]);
  searchElements.current = Array.from(document.getElementsByTagName('search'));
  catalogueElements.current = Array.from(document.getElementsByTagName('catalogue'));
  return (
    <>
      <Provider store={store}>
        {searchElements.current.map((el, i) => ReactDOM.createPortal(<Search key={i} />, el))}
        {catalogueElements.current.map((el, i) => ReactDOM.createPortal(<Catalogue key={i} />, el))}
      </Provider>
    </>
  );
};
