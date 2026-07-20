import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
const BoutiquePage = () => import('@/pages/BoutiquePage.vue')
const ProduitPage = () => import('@/pages/ProduitPage.vue')
const CommanderPage = () => import('@/pages/CommanderPage.vue')
const PanierPage = () => import('@/pages/PanierPage.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/boutique',
    name: 'boutique',
    component: BoutiquePage,
  },
  {
    path: '/produit/:id',
    name: 'produit',
    component: ProduitPage,
  },
  {
    path: '/panier',
    name: 'panier',
    component: PanierPage,
  },
  {
    path: '/commander',
    name: 'commander',
    component: CommanderPage,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

// La commande n'est accessible qu'en continuité du panier — pas comme destination
// autonome (lien direct, URL tapée à la main, rechargement de page).
router.beforeEach((to, from) => {
  if (to.name === 'commander' && from.name !== 'panier') {
    return { name: 'panier' }
  }
})

export default router
