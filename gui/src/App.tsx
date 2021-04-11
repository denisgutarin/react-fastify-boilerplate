import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { IndexPage } from './pages/index';

const App = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <IndexPage />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
