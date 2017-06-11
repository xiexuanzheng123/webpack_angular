var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        hmr: [
            'webpack-hot-middleware/client?reload=true'
        ],
        index: [
            './index.js'
        ],
        name: [
            './app/js/name.js'
        ]
    },
    output: {
        path: path.join(__dirname,'/build'),
        filename: '[name]bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css']
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            title: 'angular',
            filename: 'build/angular.html',
            template: './app/html/name.html',
            inject: 'body',
            hash: true,
            chunks: ['name']
        }),
        new ExtractTextPlugin('./app/css/style.css')
    ]
}