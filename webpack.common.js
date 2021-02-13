/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // For webpack v5
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        // More information here https://webpack.js.org/guides/asset-modules/
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js',
      '.json',
      '.css',
      '.scss',
      '.sass',
      '.png',
      '.jpg',
      '.jpeg',
      '.gif',
      '.svg',
      '.eot',
      '.ttf',
      '.woff',
      '.woff2',
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'public' }],
    }),
  ],
};
