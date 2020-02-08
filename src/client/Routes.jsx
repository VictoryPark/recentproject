import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Header, Main, Details, Board, Test } from './components';
import { DefaultLayout } from './containers';

export default () => (
  <BrowserRouter>
    <Header />
    <Redirect exact from="/" to="/main" />
    <Route exact path="/main" component={Main} />
    <Route path="/board" component={Board} />
    <Route path="/details" component={Details} />
    <Route path="/test" component={Test} />
    <Route path="/ui" component={DefaultLayout}/>
  </BrowserRouter>
);
