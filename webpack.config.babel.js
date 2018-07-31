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
  mode:  'development',
  entry: {
    app: [
      PATH('src/js/index.js'),
      PATH('src/css/styles.scss'),
    ],
  },
  output: {
    filename:   '[name].[hash].js',
    path:       PATH('dist'),
    publicPath: '/',

  },
  devtool:   'inline-source-map',
  resolve:   { extensions: ['.js', '.jsx', '.scss'] },
  devServer: {
    contentBase:        PATH('dist'),
    historyApiFallback: true,
    hot:                false,
    // display errors in a webpage overlay
    overlay:            true,
    compress:           true,
    port:               9000,
    // serve over https
    https:              false,
    open:               false,
    // allow Cross Origin Request
    headers:            {
      'Access-Control-Allow-Origin': '*',
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use:  [
          'file-loader',
        ],
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use:  'url-loader',
      },
      {
        test:   /\.svg$/,
        loader: 'babel-loader!svg-react-loader',
      },
      {
        test: /\.css$/,
        use:  [
          'style-loader',
          'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ],
      },
      {
        test: /\.s[c|a]ss$/,
        use:  [
          'style-loader',
          'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'postcss-loader',
          'sass-loader'
        ],
      },
      {
        test:    /\.js|.jsx$/,
        use:     'babel-loader',
        include: PATH('src/js'),
        exclude: /node_modules/,
      },
      {
        enforce: 'pre',
        test:    /\.js|.jsx$/,
        exclude: /node_modules/,
        loader:  'eslint-loader',
        options: {
          fix: true,
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new StyleLintPlugin(
      {
        syntax:  'scss',
        context: PATH('src/css/**/*.scss')
      }
    ),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject:   true,
      hash:     true,
      template: './src/index.html',
      filename: 'index.html',
    }),
    new WebpackMd5Hash(),
  ],
};
