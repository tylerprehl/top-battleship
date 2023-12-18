/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    ship: './src/ship.js',
    player: './src/player.js',
    gameboard: './src/gameboard.js',
    game_setup: './src/game-management.js',
    battleship: './src/battleship.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'TOP - Battleship',
      template: './index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
  },
  watchOptions: {
    ignored: /node_modules/,
  },
};
