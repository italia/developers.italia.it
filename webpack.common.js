const path = require("path");
const webpack = require("webpack");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
  // mode: 'none',
  entry: "./assets/index.js",

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, "_site/dist"),
    filename: "bundle.js",
  },

  resolve: {
    alias: {
      jquery: require.resolve("jquery"),
    },
    fallback: {
      // needed by elasticsearch
      util: require.resolve("util"),
      querystring: require.resolve("querystring-es3"),
    },
  },
  plugins: [
    // Provide global symbols for legacy plugins.
    new webpack.ProvidePlugin({
      // process is needed by util
      process: "process/browser",
    }),

    // Pass down environment variables to be replaced in the bundle
    new webpack.DefinePlugin({
      'ELASTICSEARCH_FRONTEND_URL': JSON.stringify(
        process.env.ELASTICSEARCH_FRONTEND_URL || "https://elasticsearch.developers.italia.it"
      ),
    }),

    // Just copy images and icons we reference directly in the HTML, we
    // don't need to bundle those.
    new CopyWebpackPlugin({
      patterns: [
        { from: "assets/images", to: "../assets/images" },
        { from: "assets/icons", to: "../assets/icons" },
        { from: "assets/files", to: "../assets/files" },
        { from: "node_modules/bootstrap-italia/dist/svg/sprites.svg", to: "../assets/svg/" },
      ],
    }),

    // Generate an output CSS file instead of using style injection with Javascript,
    // to minimize the chance of FOUC.
    new MiniCssExtractPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      { test: /\.(m)?js$/, use: ["babel-loader"], exclude: /node_modules/ },
      {
        // Handle .sass, .scss and .css files
        test: /\.(sa|sc|c)ss$/,

        // The first loader will be applied after others
        use: [
          MiniCssExtractPlugin.loader,
          {
            // Resolves url() and @imports inside CSS
            loader: "css-loader",
            options: { importLoaders: 2 },
          },
          // Autoprefixer and minifying
          "postcss-loader",
          // SASS to CSS
          "sass-loader",
        ],
      },
      {
        // Load images
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset/resource",
      },
      {
        // Load fonts
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
      },
    ],
  },
};
