const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    static: {
      directory: './dist',
    },

    // Write files from CopyWebpackPlugin to disk even in
    // development mode.
    // We need this because they are referenced in the HTML.
    devMiddleware: {
      writeToDisk: true,
    },
  },
});
