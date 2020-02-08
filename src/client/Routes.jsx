import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import { Board, Test } from './components';

import Header from './components/template/header/Header';
import Main from './components/main/Main';
import Footer from './components/template/footer/Footer';
import { DefaultLayout } from './containers';

export default () => (
  <HashRouter>
    <Header />
    <Redirect exact from="/" to="/main" />
    <Route exact path="/main" component={Main} />
    <Route path="/board" component={Board} />
    <Route path="/test" component={Test} />

    <Footer />

    <Route path="/ui" component={DefaultLayout} />
  </HashRouter>
);
