import React from 'react';
import {
  HashRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { Posts, Test, Products, Login } from './components';
import Detail from './components/board/Detail';

import Header from './components/template/header/Header';
import Main from './components/main/Main';
import Footer from './components/template/footer/Footer';
import { DefaultLayout } from './containers';

export default () => (
  <HashRouter>
    <Header />
    <Switch>
      <Redirect exact from="/" to="/main" />
      <Route exact path="/login" component={Login} />
      <Route exact path="/main" component={Main} />
      <Route path="/test" component={Test} />
      <Route path="/products" component={Products} />
      <Route exact path="/posts" component={Posts} />
      <Route path="/posts/:id" component={Detail} />
    </Switch>
    <Footer />

    <Route path="/ui" component={DefaultLayout} />
  </HashRouter>
);
