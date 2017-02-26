var webpack = require("webpack");
var path = require("path");

var env = process.env.NODE_ENV;
var config = {
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ["css-loader"]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    },
    entry: {
        "css": path.join(__dirname, "private/webpack/css.build.js"),
    },
    output: {
        path: path.join(__dirname, "imports/build/semantic-ui"),
        filename: "[name].js"
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(env)
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            // 変数を省略しない
            mangle:false,
            // ライセンスコメントは残す
            output:{comments: require('uglify-save-license')}
        })
    ]
};

module.exports = config;