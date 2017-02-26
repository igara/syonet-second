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
<link rel="stylesheet" href="semantic-ui/semantic.min.css"></link>

`);
            },
            preRender: function(req, res) {
            }
        }
    );
});
