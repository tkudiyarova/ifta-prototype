const { join, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const pkgJson = require('./package.json');

const copyPublicAssets = new CopyWebpackPlugin([{ from: "public" }]);

const generateHTMLTemplate = new HtmlWebpackPlugin({
  template: join(__dirname, 'public', 'index.html'),
  favicon: join(__dirname, 'public', 'favicon.ico'),
  manifest: join(__dirname, 'public', 'manifest.json')
});

module.exports = {
  entry: './src/index.js',

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'ifta-bundle.js',
    library: 'iftaBundle'
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  devServer: {
    compress: false,
    historyApiFallback: true,
    port: 3000,
    host: "0.0.0.0",
    hot: true
  },

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    copyPublicAssets,
    generateHTMLTemplate
  ]
}
