const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
  entry: './src/index.ts',
	devtool: 'eval-source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
	module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		compress: true,
		port: 5000
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'templates/index.html')
		})
	]
}