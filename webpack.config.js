'use strict';
const path = require('path');
//const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  //mode: 'production',
  entry: {
    bundle: './src/index.ts',
    bench: './src/bench.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist/'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  experiments: {
    //  executeModule: true,
    //  outputModule: true,
    //syncWebAssembly: true,
    //  topLevelAwait: true,
    asyncWebAssembly: true,
    //  layers: true,
    //  lazyCompilation: true,
  },
};
