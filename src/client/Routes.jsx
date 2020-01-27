import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Header, Main, Details, Board, Test } from './components';

export default () => (
  <BrowserRouter>
    <Header />
    <Redirect exact from="/" to="/main" />
    <Route exact path="/main" component={Main} />
    <Route path="/board" component={Board} />
    <Route path="/details" component={Details} />
    <Route path="/test" component={Test} />
  </BrowserRouter>
);
