const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.config.js');
const tailwindcssPlugin = require('tailwindcss');
const autoprefixerPlugin = require('autoprefixer');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: './dist',
    compress: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [tailwindcssPlugin, autoprefixerPlugin],
              },
            },
          },
        ],
      },
    ],
  },
});
