const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    /// XXX
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:4000",
    },
    contentBase: './dist',

    // Write files from CopyWebpackPlugin to disk even in
    // development mode.
    // We need this because they are referenced in the HTML.
    writeToDisk: true,
  },
});
