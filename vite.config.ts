import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import KumaUI from "@kuma-ui/vite";
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    KumaUI(),
    TanStackRouterVite(),
  ],
})
