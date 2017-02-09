var path = require('path');
var webpack = require('webpack');
var ENV = process.env.ENV = process.env.NODE_ENV = 'development';

var metadata = {
  title: 'Angular2 sprout',
  baseUrl: './src',
  host: 'localhost',
  port: 8008,
  ENV: ENV
};

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      { 
        test: /\.html$/,
        loader: 'html' 
      },
      { 
        test: /\.ts$/, 
        loader: 'awesome-typescript-loader' 
      },
      {
        test: /\.scss$/,
        //include: [path.resolve(__dirname, 'bootstrap')],
        //exclude: /node_modules/,
        loaders: ['raw-loader', 'sass-loader']
      }
    ],
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    ),
  ],
  // our Webpack Development Server config
  devServer: {
    port: metadata.port,
    host: metadata.host,
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
  },
  
  // we need this due to problems with es6-shim
  node: {
    global: true,
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};