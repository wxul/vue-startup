const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseconfig = require('./webpack.base.config.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const APP_PATH = path.resolve(__dirname, '../dist');
const PRO_PATH = path.resolve(__dirname, '../');

var config = Object.assign({}, baseconfig, {
    devtool: 'cheap-module-source-map',
    output: {
        path: APP_PATH,
        publicPath: './',
        filename: '[name].js',
        chunkFilename: '[name],[chunkhash].min.js'
    }
});

config.plugins = (baseconfig.plugins || []).concat([
    new UglifyJSPlugin()
]);

module.exports = config;