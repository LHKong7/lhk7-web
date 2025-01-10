import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import KumaUI from "@kuma-ui/vite";
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    react(),
    KumaUI(),
    TanStackRouterVite(),
  ],
})
