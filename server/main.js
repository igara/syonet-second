import React from "react";
import { match, RouterContext } from "react-router";
import routes from "../imports/routes.jsx";

WebApp.connectHandlers.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentaial", true);
    return next();
});

Meteor.startup(() => {
    ReactRouterSSR.Run(routes, 
        // clientOptions 
        {
            props: {
                onUpdate() {
                },
            }
        },
        // serverOptions
        {
            htmlHook(html) {
                return html.replace("<head>", `<head>
<title>syonet</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<link rel="stylesheet" href="/semantic-ui/semantic.min.css">
`);
            },
            preRender: function(req, res) {
                match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
                    if (error) {
                        res.statusCode = 500;
                    } else if (redirectLocation) {
                        res.statusCode = 302;
                    } else if (renderProps) {
                        const route = _.last(renderProps.routes, 1);
                        const status = route[0].status;
                        if (status) {
                            res.statusCode = status;
                        } else {
                            res.statusCode = 404;
                        }
                    } else {
                        res.statusCode = 404;
                    }
                });
            }
        }
    );
});
