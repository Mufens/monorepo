 //@ts-nocheck
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import '../public-path.js'
import { renderWithQiankun} from "vite-plugin-qiankun/dist/helper"
let app = null

// 挂载函数
function render(props = {}) {
  const { container } = props
  // 如果已经存在应用实例，先卸载
  if (app) {
    app.unmount()
    app = null
  }
  app = createApp(App)
  app.use(router)
  app.mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时直接挂载
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

renderWithQiankun({
  bootstrap() {
    console.log("vue3-vite子应用启动")
  },
  mount(props) {
    console.log("vue3-vite子应用挂载", props)
    render(props)
  },
  update(props) {
    console.log("vue3-vite子应用更新", props)
  },
  unmount() {
    console.log("vue3-vite子应用卸载")
    app.unmount()
    app = null
  }
})


