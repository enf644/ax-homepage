// const Visualizer = require('webpack-visualizer-plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
// const MonocoEditorPlugin = require('monaco-editor-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  assetsDir: 'static',
  transpileDependencies: ['vuetify'],
  configureWebpack: () => {
    let conf = {};

    if (process.env.NODE_ENV === 'production') {
      // --- PRODUCTION CONFIG -----
      conf = {
        // devtool: 'source-map',
        output: {
          // filename: 'static/js/ax-bundle-huy.js',
          pathinfo: false
        },
        optimization: {
          minimizer: [new TerserPlugin()],
          minimize: true,
          removeAvailableModules: false,
          removeEmptyChunks: false,
          // splitChunks: false
        },
        module: {
          rules: [
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader?cacheDirectory=true',
              }
            }
          ]
        },
        plugins: [
          new VuetifyLoaderPlugin(),
        ]
      };
    } else {
      // --- DEVELOPMENT CONFIG -----
      // delete conf.optimization.splitChunks;
      // conf.optimization.minimize = false;
      conf = {
        output: {
          pathinfo: false
        },
        optimization: {
          removeAvailableModules: false,
          removeEmptyChunks: false,
          splitChunks: false
        },
        module: {
          rules: []
        },
        plugins: [
          new VuetifyLoaderPlugin(),
          // new MonocoEditorPlugin({
          //   languages: ['json', 'html', 'python', 'markdown', 'yaml']
          // })
        ]
      };
    }

    return conf;
  },
  filenameHashing: false,
  chainWebpack: config => {
    // config.module
    //   .rule('vue')
    //   .use('vue-loader')
    //   .loader('vue-loader')
    //   .tap(options => {
    //     options.prettify = false;
    //     return options;
    //   });
    config.optimization.delete('splitChunks');
  }
};
