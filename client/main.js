import React from "react";
import ReactDOM from "react-dom";
import {Router, browserHistory} from "react-router";
import routes from "../imports/routes.jsx";

ReactDOM.render(
  <Router history={browserHistory}>
    {routes}
  </Router>,
document.querySelector("#react-app"));
