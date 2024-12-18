import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import commonjs from 'vite-plugin-commonjs';

export default defineConfig({
  plugins: [react({fastRefresh: false })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

})
