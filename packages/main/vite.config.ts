import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  },
  server: {
    port: 7000, // 主应用固定端口,所有子应用都基于这个端口通信
    cors: true, // 允许跨域，子应用加载必须开
     // 配置代理
    // proxy: {
    //   '/micro': {
    //     target: 'http://localhost:7000',
    //   }
    // }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
