import {Meteor} from "meteor/meteor";
import {WebApp} from "meteor/webapp";
import {ReactRouterSSR} from "meteor/reactrouter:react-router-ssr";

import {match} from "react-router";
import {_} from "underscore";
import routes from "../imports/routes.jsx";
import CurlApi from "../imports/rest/curl_api.js";
import Url from "url";

// e-statのデータを取得する
WebApp.connectHandlers.use("/api/estat", (req, res, next) => {
	// リクエストされたurlの情報をパース
	const url_parse = Url.parse(req.url, true);
	// リクエストパラメータを取得する
	const query = url_parse.query;
	if (query.statsCode) {
		// statsCodeがある場合データ一覧表API
		const curl_api = new CurlApi();
		curl_api.setStatsListRoute(query.statsCode);
	}
	if (query.statsDataId) {
		// statsCodeがある場合データ一覧表API
		const curl_api = new CurlApi();
		curl_api.setStatsListRoute(query.statsDataId);
	}
});

WebApp.connectHandlers.use((req, res, next) => {
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
<meta charset="utf-8">
<meta name="description" content="がらしょーのWeb実験室的な何か">
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
