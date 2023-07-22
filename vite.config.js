import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: [
  //     { find: '@', replacement: path.resolve(__dirname, '/src') },
  //     {
  //       find: '@components',
  //       replacement: path.resolve(__dirname, '/src/components'),
  //     },
  //     { find: '@pages', replacement: path.resolve(__dirname, '/src/pages') },
  //   ],
  // },
  plugins: [react()],
  base: "./",
  build: {
    polyfillModulePreload: false,
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].[hash].module.js",
        chunkFileNames: "assets/[name].[hash].module.js",
      },
    },
  },
});
