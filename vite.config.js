import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    postcss: {}, // ensure Tailwind uses PostCSS engine
  },
  optimizeDeps: {
    exclude: ['lightningcss'], // ⛔ force Vite to ignore it
  },
})
