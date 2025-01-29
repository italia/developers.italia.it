// This is Webpack's entrypoint.

import { BackToTop, Dropdown, Tab, Collapse } from 'bootstrap-italia';

import './js/logos';
import './js/main';
import './js/misc';

import './js/github-issues';
import './js/platform-activities';

import './js/swagger-custom';

import './scss/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './js/App.js';

// Init Bootstrap Italia JS

BackToTop.getOrCreateInstance(document.getElementsByClassName('back-to-top')[0]);

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

// Init React components

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
