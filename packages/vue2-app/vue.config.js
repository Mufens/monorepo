/* eslint-disable */
const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 5176, // 独立端口
  },
  configureWebpack: {
    resolve: {
      alias: {
        'common-styles': path.resolve(__dirname, '../../common/common-styles'),
        '@Mycomponents': path.resolve(__dirname, '../../components')
      }
    }
  }
})
