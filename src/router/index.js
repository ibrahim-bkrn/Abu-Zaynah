import { createRouter, createWebHistory } from 'vue-router'
const HomePage = () => import('@/pages/HomePage.vue')
const BoutiquePage = () => import('@/pages/BoutiquePage.vue')
const ProduitPage = () => import('@/pages/ProduitPage.vue')
const CommanderPage = () => import('@/pages/CommanderPage.vue')

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
