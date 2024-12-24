import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react({fastRefresh: false })],
  // esbuild: {
  //   loader: 'jsx', // Ensure all `.js` files are treated as JSX files
  //   include: [
  //     // Add paths to the node_modules package that contains JSX
  //     'node_modules/lucide-react/**',
  //   ],
  //   exclude: [],
  // },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

})
