const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const webpack = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');

const PATH = str => path.resolve(__dirname, str);

module.exports = {
  entry: {
    app: [
      PATH('src/js/index.js'),
      PATH('src/css/styles.scss'),
    ],
  },
  output: {
    filename: '[name].[hash].js',
    path:     PATH('dist'),
  },
  devtool:   'inline-source-map',
  resolve:   { extensions: ['.js', '.jsx'] },
  devServer: {
    contentBase: PATH('dist'),
    hot:         false,
    // display errors in a webpage overlay
    overlay:     true,
    compress:    true,
    port:        9000,
    // serve over https
    https:       true,
    // allow Cross Origin Request
    headers:     {
      'Access-Control-Allow-Origin': '*',
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test:    /\.js|.jsx$/,
        exclude: /node_modules/,
        loader:  'eslint-loader',
        options: {
          fix: true,
        },
      },
      {
        test:    /\.js|.jsx$/,
        use:     'babel-loader',
        include: PATH('src/js'),
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use:  'url-loader',
      },
      {
        test:   /\.svg$/,
        loader: 'babel-loader!svg-react-loader',
      },
      {
        test: /\.s[c|a]ss$/,
        use:  ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use:  [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use:  [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new StyleLintPlugin({ syntax: 'scss', context: PATH('src/css') }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject:   true,
      hash:     true,
      template: './src/index.html',
      filename: 'index.html',
    }),
    new WebpackMd5Hash(),
    new FlowBabelWebpackPlugin(),
  ],
};
