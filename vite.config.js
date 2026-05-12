import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    vue(),
    sitemap({
      hostname: 'https://abouzaynah.com',
      dynamicRoutes: [
        '/boutique',
        '/commander',
        '/produit/miel-jujubier',
        '/produit/miel-euphorbe',
        '/produit/miel-blanc',
        '/produit/huile-nigelle',
        '/produit/gelules-nigelle',
        '/produit/amlou',
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
