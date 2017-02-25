import React from "react";
import {Route, IndexRoute} from "react-router";

import Body from "../imports/ui/layouts/body/body.jsx";
import HomePage from "../imports/ui/pages/home/home_page.jsx";
import NotFoundPage from "../imports/ui/pages/not_found/not_found_page.jsx";

module.exports = (
    <Route path="/" component={Body}>
        <IndexRoute component={HomePage}/>
        <Route status="404" path="*" component={NotFoundPage} />
    </Route>
);
