// Client entry point, imports all client code
import {render} from "react-dom";
import { AppRoutes } from '../imports/startup/client/routes.js';

Meteor.startup(() => {
  render(AppRoutes(), document.querySelector("#app"));
});
