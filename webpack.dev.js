/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'eval-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 5000,
  },
};
