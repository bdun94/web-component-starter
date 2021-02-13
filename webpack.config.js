/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');
const webpackDev = require('./webpack.dev');
const webpackProd = require('./webpack.prod');

module.exports = (env) => {
  switch (env.NODE_ENV) {
    case 'development':
      return merge(webpackCommon, webpackDev);
    case 'production':
      return merge(webpackCommon, webpackProd);
    default:
      console.log('Default');
      return merge(webpackCommon, webpackDev);
  }
};
