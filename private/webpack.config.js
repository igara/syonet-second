var current_path = process.cwd();

var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new ExtractTextPlugin("semantic.min.css");

var config = {
	entry: [path.join(current_path, "private/webpack/css.build.js")],
	output: {
		path: path.join(current_path, "public/semantic-ui"),
		filename: "bundle.js"
	},
	plugins: [
		extractCSS
	],
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: extractCSS.extract("css-loader")
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=90000000000000000&mimetype=application/font-woff"
			},
			{
				test: /\.(ttf|eot|svg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=90000000000000000"
			}
		]
	}
};

module.exports = config;
