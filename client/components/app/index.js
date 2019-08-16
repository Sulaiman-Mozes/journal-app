import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import history from '../../utils/history';
import ProtectedRoute from './protectRoute';
import Home from '../home';
import Header from '../../containers/header';
import Footer from '../footer';
import Journal from '../../containers/journals';
import UpdateNote from '../../containers/journals/updateNote';
import Login from '../../containers/users/login';
import Signup from '../../containers/users/signup';
import NotFound from '../commons/notFound';

const App = () => (
  <Router history={history}>
    <React.Fragment>
      <Header />
      <ToastsContainer
        store={ToastsStore}
        position={ToastsContainerPosition.TOP_RIGHT}
        lightBackground
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <ProtectedRoute exact path="/dashboard" component={Journal} />
        <ProtectedRoute exact path="/update/:id" component={UpdateNote} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </React.Fragment>
  </Router>
);

export default App;
