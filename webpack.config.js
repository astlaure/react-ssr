const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/web/index.tsx',
  output: {
    filename: 'js/[name].js',
    path: path.resolve('public'),
    publicPath: '',
    clean: false,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // {
      //   test: /\.s?css$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     'resolve-url-loader',
      //     'sass-loader',
      //   ],
      // },
      // {
      //   test: /\.(png|svg|jpe?g|gif)$/,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: 'images/[name][ext]',
      //   },
      // },
    ],
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: 'css/styles.css',
    // }),
    new HtmlWebpackPlugin({
      template: './src/web/index.html',
    }),
  ],
  devtool: 'source-map',
  devServer: {
    hot: true,
    port: 4200,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
};
