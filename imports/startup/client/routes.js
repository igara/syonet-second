import React from "react";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import Body from "../../ui/layouts/body/body.jsx";
// import HomePage from "../../ui/pages/home/home.js";
// import NotFoundPage from "../../ui/pages/not-found/not-found.js";

export const AppRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Body}>
      {/*<Route path="/" component={HomePage} />
      <Route path="*" component={NotFoundPage} />*/}
    </Route>
  </Router>
);
