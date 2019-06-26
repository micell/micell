const path = require('path')
const webpack = require('webpack')
const pkg = require('./package.json')

const root = process.cwd()
const { NODE_ENV } = process.env

const config = {
  mode: NODE_ENV === 'production' ? 'production' : 'development',
  context: root,
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: `${pkg.name}.js`,
    path: path.join(root, 'dist'),
    library: 'micellar',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  node: {
    Buffer: false
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      'process.env.VERSION': JSON.stringify(pkg.version)
    })
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
}

if (NODE_ENV === 'production') {
  config.output.filename = `${pkg.name}.min.js`
}

module.exports = config
