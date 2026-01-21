import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory( window.__POWERED_BY_QIANKUN__ ? '/sub3' : "/"),
  routes: [
    { path: '/sub3', name: 'Home', component: Home },
  ]
})
export default router