import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), qiankun('vue3-app', { useDevMode: true })],
  base: '/sub3',
  server: {
    port: 7003,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      // 'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  },
})
