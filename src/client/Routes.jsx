import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { Posts, Test, Products } from './components';

import Header from './components/template/header/Header';
import Main from './components/main/Main';
import Footer from './components/template/footer/Footer';
import { DefaultLayout } from './containers';

export default () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Redirect exact from="/" to="/main" />
      <Route exact path="/main" component={Main} />
      <Route path="/test" component={Test} />
      <Route path="/products" component={Products} />
      <Route path="/post" component={Posts} />
    </Switch>
    <Footer />

    <Route path="/ui" component={DefaultLayout} />
  </BrowserRouter>
);
