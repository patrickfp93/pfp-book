import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
import buildLessJson from "./plugins/buildLessJson";
import postcssModules from 'postcss-modules';
import PostcssModulesPlugin from 'postcss-modules';
//import ViteStyleImport from 'vite-plugin-style-import';
//import Checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [buildLessJson(),react(),{
    
  }],
  css: {
    modules:{
      getJSON: (cssFileName: string, json: Record<string, string>, outputFileName: string) =>{
        //buildLessJson()
      }
    },
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
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.json', '.module.less'],
  },
})