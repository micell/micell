const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const root = process.cwd();
const NODE_ENV = process.env.NODE_ENV;
const packageName = process.env.npm_package_name;

const config = {
  context: root,
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: `${packageName}.js',
    path: path.join(root, 'dist'),
  },
  node: {
    Buffer: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    })
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ],
      }
    ],
  },
};

if (NODE_ENV === 'production') {
  config.output.filename = `${packageName}.min.js`;
  config.plugins.push(
    new UglifyJsPlugin({
      sourceMap: true,
      parallel: {
        // cache: true,
        // workers: 4,
      },
      uglifyOptions: {
        ecma: 8,
        ie8: true,
        compress: {
          warnings: false,
        },
        output: {
          ascii_only: true,
        },
      },
    })
  );
}

module.exports = config;
