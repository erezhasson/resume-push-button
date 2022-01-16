import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landscape from './Landscape';

export default () => (
  <Router>
    <Switch>
      <Route exact path='/' component={ Landscape } />
    </Switch>
  </Router>
)