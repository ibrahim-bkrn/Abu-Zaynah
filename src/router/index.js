import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import BoutiquePage from '@/pages/BoutiquePage.vue'
import ProduitPage from '@/pages/ProduitPage.vue'
import CommanderPage from '@/pages/CommanderPage.vue'

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

export default router
