import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: '../build',
    emptyOutDir: true,
  },
  //need this line for gh-pages deployment to function
  base: "/delvers-bastionland-chargen/"
})
