import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Routes from './Routes';
import { DefaultLayout } from './containers';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/ui">
          <DefaultLayout />
        </Route>
        <Route path="/">
          <div>
            <h2>Recent Homepage</h2>
            <Routes />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
