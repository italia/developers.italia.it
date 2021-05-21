import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { SearchContainer } from './components/Search/SearchContainer.js';
import { CatalogueContainer } from './components/Catalogue/CatalogueContainer.js';
import { PubliccodeBadge } from './components/PubliccodeBadge.js';
import { CatalogueItem } from './components/Catalogue/CatalogueItem.js';
import { MailingListSubscribe } from './components/MailingList/MailingListSubscribe.js';
import { MailingListConfirmation } from './components/MailingList/MailingListConfirmation.js';

export const App = () => {
  const search = useRef(Array.from(document.getElementsByTagName('custom-search')));
  const catalogue = useRef(Array.from(document.getElementsByTagName('custom-catalogue')));
  const thumbnails = useRef(Array.from(document.getElementsByTagName('catalogue-item')));
  const publiccodeBadge = useRef(Array.from(document.getElementsByTagName('publiccode-badge')));
  const mailingListSubscribe = useRef(Array.from(document.getElementsByTagName('mailing-list-subscribe')));
  const mailingListConfirmation = useRef(Array.from(document.getElementsByTagName('mailing-list-confirmation')));

  const renderThumbnail = (t) => {
    const props = Object.assign({}, ...Array.from(t.attributes, ({ name, value }) => ({ [name]: value })));

    return ReactDOM.createPortal(<CatalogueItem {...props} />, t);
  };

  const renderCustomElement = (t, Element) => {
    const props = Object.assign({}, ...Array.from(t.attributes, ({ name, value }) => ({ [name]: value })));

    return ReactDOM.createPortal(<Element {...props} />, t);
  };

  return (
    <>
      {search.current[0] && ReactDOM.createPortal(<SearchContainer />, search.current[0])}
      {catalogue.current[0] && ReactDOM.createPortal(<CatalogueContainer />, catalogue.current[0])}
      {thumbnails.current.map((t) => renderThumbnail(t))}
      {mailingListSubscribe.current.map((p) => renderCustomElement(p, MailingListSubscribe))}
      {mailingListConfirmation.current.map((p) => renderCustomElement(p, MailingListConfirmation))}
      {publiccodeBadge.current.map((p) => renderCustomElement(p, PubliccodeBadge))}
    </>
  );
};
