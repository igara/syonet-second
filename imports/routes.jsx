import React from "react";
import {Route, IndexRoute} from "react-router";

import Body from "../imports/ui/layouts/body/body.jsx";
import HomePage from "../imports/ui/pages/home/home_page.jsx";
import NotFoundPage from "../imports/ui/pages/not_found/not_found_page.jsx";
import GamesPage from "../imports/ui/pages/games/games_page.jsx";
import DatasPage from "../imports/ui/pages/datas/datas_page.jsx";

module.exports = (
    <Route path="/" component={Body}>
        <IndexRoute component={HomePage} status={200} />
        <Route path="home" component={HomePage} status={200} />
        <Route path="games" component={GamesPage} status={200} />
        <Route path="datas" component={DatasPage} status={200} />
        <Route path="*" component={NotFoundPage} status={404} />
    </Route>
);
