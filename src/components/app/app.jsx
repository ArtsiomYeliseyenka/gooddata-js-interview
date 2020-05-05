import React from 'react';
import { ROUTES } from 'common/constants';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NotFound, Statistics } from 'pages';
import { Layout } from 'components/layout';

export const App = () => {
  return (
    <Router basename={process.env.NODE_ENV === 'production' ? '/billsui/build' : ''}>
      <Layout>
        <Switch>
          <Route path={ROUTES.DEFAULT} exact component={Statistics} />
          <Route path={ROUTES.STATISTICS} exact component={Statistics} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};
