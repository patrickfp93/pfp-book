import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
import lessToJson from "./plugins/lessToJson";


export default defineConfig({
  plugins: [react(),lessToJson(true)],
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
        relativeUrls: true,
        javascriptEnabled: true,
      },
    },
  },
})




