import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';
import { Router, Route, hashHistory } from 'react-router';

import Home from './components/Home';
import Client from './components/Client';
import Oracle from './components/Oracle';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="/client" component={Client} />
    <Route path="/oracle" component={Oracle} />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
