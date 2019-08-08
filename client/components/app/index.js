import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../../utils/history';
import Home from '../home';
import Header from '../header';
import Footer from '../footer';
import Journal from '../journals';
import Login from '../login';
import Signup from '../../containers/users/signup';
import NotFound from '../notFound';

const App = () => (
  <Router history={history}>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Journal} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </React.Fragment>
  </Router>
);

export default App;
