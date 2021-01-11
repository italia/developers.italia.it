const path = require("path");
const webpack = require("webpack");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
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
  },
  plugins: [
    // Provide global symbols for legacy plugins.
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",

      PhotoSwipe: "photoswipe",
      PhotoSwipeUI_Default: "photoswipe/src/js/ui/photoswipe-ui-default.js",

      PerfectScrollbar: "perfect-scrollbar",
    }),

    // Pass down environment variables to process.env.
    //
    // If a variable is set, its value takes precedence over
    // the default value defined here.
    new webpack.EnvironmentPlugin({
      ELASTICSEARCH_FRONTEND_URL: "https://elasticsearch.developers.italia.it",
    }),

    // Just copy images and icons we reference directly in the HTML, we
    // don't need to bundle those.
    new CopyWebpackPlugin({
      patterns: [
        { from: "assets/images", to: "../assets/images" },
        { from: "assets/icons", to: "../assets/icons" },
        { from: "node_modules/bootstrap-italia/dist/svg/sprite.svg", to: "../assets/svg/" },
      ],
    }),

    // Generate an output CSS file instead of using style injection with Javascript,
    // to minimize the chance of FOUC.
    new MiniCssExtractPlugin(),
  ],

  module: {
    rules: [
      { test: /\.(m)?js$/, use: ["babel-loader"], exclude: /node_modules/ },
      { test: /\.handlebars$/, loader: "handlebars-loader" },
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
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
            },
          },
        ],
      },
      {
        // Load fonts
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
};
