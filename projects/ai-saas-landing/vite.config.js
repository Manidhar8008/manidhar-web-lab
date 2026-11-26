import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use /manidhar-web-lab/ when deploying to GitHub Pages project site
  base: process.env.GITHUB_PAGES === 'true' ? '/manidhar-web-lab/' : '/',
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    target: 'esnext',
  },
})
