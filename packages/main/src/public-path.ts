// 解决qiankun加载时的静态资源路径问题
if (window.__POWERED_BY_QIANKUN__) {
    // @ts-expect-error 忽略类型报错，生产环境无影响
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  }