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
                    console.log(routes);
                },
            }
        },
        // serverOptions
        {
            htmlHook(html) {
                return html.replace("<head>", `<head>
<title>syonet</title>
`);
            },
            preRender: function(req, res) {
            }
        }
    );
});
