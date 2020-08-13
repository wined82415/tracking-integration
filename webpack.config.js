const path = require('path')

let config = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    libraryTarget: 'umd',
    library: 'tracking-integration',
    umdNamedDefine: true,
    globalObject: 'this',
    filename: 'waudit.js',
    path: path.resolve(__dirname, 'dist')
  }
}

module.exports = [
  {
    ...config,
    ...{
      output: {
        libraryTarget: 'umd',
        library: 'tracking-integration',
        umdNamedDefine: true,
        globalObject: 'this',
        filename: 'waudit.js',
        path: path.resolve(__dirname, 'dist')
      }
    }
  },
  {
    ...config,
    ...{
      output: {
        libraryTarget: 'commonjs-module',
        library: 'tracking-integration',
        umdNamedDefine: true,
        globalObject: 'this',
        filename: 'waudit.esm.js',
        path: path.resolve(__dirname, 'dist')
      }
    }
  }
]
