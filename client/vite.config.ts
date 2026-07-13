import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', 
        additionalData: `@use "@/utils/_vars.scss" as *;`
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), 
    },
  },
})
