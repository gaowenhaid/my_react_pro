import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig((config) => {
  console.log(config)
  return {
    plugins: [react(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'my_pro'
        }
      }
    })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    }
  }
})
