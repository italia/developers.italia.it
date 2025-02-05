// This is Webpack's entrypoint.

import { BackToTop, Dropdown, Tab, Collapse, HeaderSticky, NavBarCollapsible } from 'bootstrap-italia';

import './scss/main.scss';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { NotificationManager } from 'design-react-kit';
import { App } from './js/App.js';

// Init Bootstrap Italia JS

BackToTop.getOrCreateInstance(document.getElementsByClassName('back-to-top')[0]);

const navBarCollapsibleButton = document.querySelector("[data-bs-toggle='navbarcollapsible']");
NavBarCollapsible.getOrCreateInstance(document.querySelector(navBarCollapsibleButton.dataset.bsTarget));

const headerSticky = document.querySelector("[data-bs-toggle='sticky']");
HeaderSticky.getOrCreateInstance(headerSticky);

const dropdownElements = document.querySelectorAll("[data-bs-toggle='dropdown']");
for (const element of dropdownElements) {
  Dropdown.getOrCreateInstance(element);
}

const tabElements = document.querySelectorAll("[data-bs-toggle='tab']");
for (const element of tabElements) {
  Tab.getOrCreateInstance(element);
}

const collapseElements = document.querySelectorAll("[data-bs-toggle='collapse']");
for (const element of collapseElements) {
  Collapse.getOrCreateInstance(element);
}

// Ugly fix to make search working on sticky menu
headerSticky.addEventListener('on.bs.sticky', () => {
  setTimeout(() => {
    const searchWrapperEls = document.querySelectorAll('.it-search-wrapper');
    searchWrapperEls[searchWrapperEls.length - 1].onclick = () => {
      document.querySelectorAll('custom-search > div')[0].click();
    };
  }, 100);
});

// Init React components

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotificationManager></NotificationManager>
    <App />
  </React.StrictMode>
);

import './js/main';
import './js/misc';
import './js/swagger-custom';
