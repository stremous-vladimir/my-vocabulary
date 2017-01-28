var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
webpack.ContextReplacementPlugin(/\.\/locale$/, null, false, /js$/);

module.exports = {
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname)) + '/!html'
      },
      {
        test:   /\.sass$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test:   /\.css/,
        loader: ExtractTextPlugin.extract('css')
      },
      {
        test:   /\.(png|jpg|svg|ttf|eot|woff|woff2|gif)/,
        loader: 'file?name=[path][name].[ext]'
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          cacheDirectory: true
        }
      }
    ]
  },
  context: __dirname,
  entry: "./app/index.js",
  output: {
    path: path.join(__dirname, "src"),
    filename: "bundle.js"
  },
  watch: false,
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  devtool: "source-map"
};