// This is Webpack's entrypoint.

import 'bootstrap-italia';

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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
