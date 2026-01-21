// src/main.js
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "../public-path.js";

Vue.config.productionTip = false;

// 声明一个变量接收Vue实例
let instance = null;

// 声明一个渲染函数
function render(props = {}) {
  const { container } = props;
  // 如果有需要，可以从props中获取主应用传递的值，比如基路径
  // const { basePath } = props

  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// 判断是否在乾坤环境下运行，如果不是，则独立渲染
if (!window.__POWERED_BY_QIANKUN__) {
  console.log(" Vue2 App 独立运行");
  render(); // 独立运行时直接渲染
}

// 1. bootstrap (可选)
export async function bootstrap(props) {
  console.log("vue2应用启动", props);
}

// 2. mount (必须)
export async function mount(props) {
  console.log("vue2子应用:接收主应用参数", props);
  // // 在这里可以接收主应用传递的全局状态
  // if (props.setGlobalState) {
  //   // 如果需要，可以监听主应用状态变化
  //   props.onGlobalStateChange((state, prevState) => {
  //     console.log("主应用状态变化:", prevState, "->", state);
  //     // 可以在这里更新子应用内部状态，例如：
  //     // store.commit('updateFromMain', state)
  //   }, true); // 立即执行一次
  // }
  // 调用渲染函数
  render(props);
}

// 3. unmount (必须)
export async function unmount(props) {
  console.log("vue2应用卸载", props);
  // 销毁Vue实例
  if (instance) {
    instance.$destroy();
    instance.$el.innerHTML = "";
    instance = null;
  }
}
