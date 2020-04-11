// const Visualizer = require('webpack-visualizer-plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
// const MonocoEditorPlugin = require('monaco-editor-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // outputDir: '../dist/ax',
  assetsDir: 'static',
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        implementation: require('sass')
        // fiber: require('fibers')
      }
    }
  },
  transpileDependencies: ['vuetify'],
  devServer: {
    disableHostCheck: true,
    // https: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:80',
        secure: false
      }
    }
  },
  runtimeCompiler: false,
  configureWebpack: () => {
    let conf = {};

    if (process.env.NODE_ENV === 'production') {
      // --- PRODUCTION CONFIG -----
      conf = {
        plugins: [
          new VuetifyLoaderPlugin()
        ]
      };
    } else {
      // --- DEVELOPMENT CONFIG -----
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
          new VuetifyLoaderPlugin()
        ]
      };
    }

    return conf;
  },
  // filenameHashing: false,
  // chainWebpack: config => {
  //   config.module
  //     .rule('vue')
  //     .use('vue-loader')
  //     .loader('vue-loader')
  //     .tap(options => {
  //       options.prettify = false;
  //       return options;
  //     });
  //   config.optimization.delete('splitChunks');
  // }
};
