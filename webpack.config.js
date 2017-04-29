/**
 * Created by obi on 2017-04-28.
 */

const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

// var webpack = require("webpack");

const extractTextPlugin = new ExtractTextPlugin({
    filename: "css/main.css"
});

module.exports = {
    entry: "./src/webapp/scripts/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/bundle.js"
        // publicPath: "/dist"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["es2015"]
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractTextPlugin.extract({
                    use: ["css-loader", "sass-loader"]
                })
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(jpg|png)/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "img/",
                            publicPath: ""
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        extractTextPlugin,
        new HtmlWebpackPlugin({
            template: "src/webapp/index.html"
        }),
        new CleanWebpackPlugin(["dist"])
        /** new webpack.optimize.UglifyJsPlugin({ }) */
    ]
};
