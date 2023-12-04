import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
import buildLessJson from "./plugins/buildLessJson";
//import ViteStyleImport from 'vite-plugin-style-import';
//import Checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [buildLessJson(true),react()],
  css: {
    modules:false,
    preprocessorOptions: {
      less: {
        math: "always",
        relativeUrls: true,
        javascriptEnabled: true,
      },
    },
  },
  json: { stringify: false }
  , resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.json','.less?inline'],
  },
})