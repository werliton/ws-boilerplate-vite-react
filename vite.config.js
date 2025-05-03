import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
    visualizer({
      filename: './dist/bundle-report.html',
      template: 'flamegraph',
      gzipSize: true,
      brotliSize: true,
    }),
    visualizer({
      filename: './dist/bundle-dependences-report.html',
      template: 'network',
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, './src'),
    },
  },
})
