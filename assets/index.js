// This is Webpack's entrypoint.

import {BackToTop} from 'bootstrap-italia';

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

new BackToTop(document.getElementsByClassName('back-to-top')[0])


// Init React components

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
