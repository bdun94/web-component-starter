module.exports = {
  presets: [['@babel/preset-env'], '@babel/preset-typescript'],
  plugins: [
    'transform-es2015-modules-commonjs',
    '@babel/plugin-proposal-decorators',
    '@babel/plugin-proposal-class-properties',
  ],
};
