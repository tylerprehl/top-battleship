/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    ship: './src/ship.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  /*
  plugins: [
    new HtmlWebpackPlugin({
      title: 'JavaScript Practice',
      template: './index.html',
    }),
  ],
  */
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          // Adds CSS to the DOM by injecting a `<style>` tag
          'style-loader',
          // Interprets `@import` and `url()` like `import/require()` and will resolve them
          'css-loader',
        ],
        exclude: /node_modules/
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
  },
  watchOptions: {
    ignored: /node_modules/
  }
};
