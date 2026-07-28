import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import sitemap from 'vite-plugin-sitemap'

const PRODUIT_SLUGS = [
  'miel-jujubier',
  'miel-euphorbe',
  'miel-blanc',
  'huile-nigelle',
  'gelules-nigelle',
  'amlou',
]

export default defineConfig({
  plugins: [
    vue(),
    sitemap({
      hostname: 'https://www.abuzaynah.com',
      dynamicRoutes: [
        '/boutique',
        '/commander',
        ...PRODUIT_SLUGS.map((slug) => `/produit/${slug}`),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ssgOptions: {
    includedRoutes() {
      return [
        '/',
        '/boutique',
        '/panier',
        '/commander',
        ...PRODUIT_SLUGS.map((slug) => `/produit/${slug}`),
      ]
    },
  },
})
