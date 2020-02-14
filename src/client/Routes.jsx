import React from 'react';
import {
  HashRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { Posts, Test, Products, Login } from './components';

import Header from './components/template/header/Header';
import Main from './components/main/Main';
import Footer from './components/template/footer/Footer';

export default () => (
  <HashRouter>
    <Header />
    <Switch>
      <Redirect exact from="/" to="/main" />
      <Route exact path="/login" component={Login} />
      <Route exact path="/main" component={Main} />
      <Route path="/test" component={Test} />
      <Route path="/products" component={Products} />
      <Route path="/post" component={Posts} />
    </Switch>
    <Footer />
  </HashRouter>
);
