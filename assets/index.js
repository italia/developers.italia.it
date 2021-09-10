// This is Webpack's entrypoint.

import 'bootstrap';

import 'datatables.net';

import './js/logos';
import './js/main';
import './js/misc';

import 'bootstrap-select/js/bootstrap-select';
import 'bootstrap-italia/src/js/plugins/select.js';
import 'bootstrap-italia/src/js/plugins/custom-select.js';
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
