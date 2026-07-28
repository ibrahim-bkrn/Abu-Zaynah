import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes, scrollBehavior } from './router'
import './assets/styles/global.css'

function setVh() {
  if (window.innerWidth <= 768) {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)
  }
}

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  ({ router, isClient }) => {
    // La commande n'est accessible qu'en continuité du panier — pas comme destination
    // autonome (lien direct, URL tapée à la main, rechargement de page). Désactivé
    // pendant la génération statique pour que la page se pré-rende avec son vrai
    // contenu plutôt qu'une redirection vide.
    if (isClient) {
      router.beforeEach((to, from) => {
        if (to.name === 'commander' && from.name !== 'panier') {
          return { name: 'panier' }
        }
      })

      setVh()
      window.addEventListener('orientationchange', () => setTimeout(setVh, 200))
    }
  },
)
