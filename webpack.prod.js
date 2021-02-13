/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
