const { name } = require("./package.json");
module.exports = {
  // 开发跨域配置
  devServer: {
    port: 7002,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  // 生产环境和开发环境的webpack配置
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`, // 避免与主应用或其他子应用的jsonpFunction冲突
    },
    // 可以在这里配置外部依赖，避免打包进bundle，从主应用引入
    // externals: {
    //   'vue': 'Vue',
    //   'vue-router': 'VueRouter',
    //   'vuex': 'Vuex'
    // }
  },
};
