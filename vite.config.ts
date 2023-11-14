import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteLessPlugin from 'less';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
        relativeUrls: true,
        javascriptEnabled: true
      },
    },
  },
})
