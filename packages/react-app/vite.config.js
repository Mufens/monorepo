import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175, // 独立端口
  },
  resolve: {
    alias: {
      'common-styles': path.resolve(__dirname, '../../common/common-styles'),
    }
  }
})
