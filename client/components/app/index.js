import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../../utils/history';
import Home from '../home';

const App = () => (
  <Router history={history}>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default App;
