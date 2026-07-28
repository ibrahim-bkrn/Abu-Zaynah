import HomePage from '@/pages/HomePage.vue'
const BoutiquePage = () => import('@/pages/BoutiquePage.vue')
const ProduitPage = () => import('@/pages/ProduitPage.vue')
const CommanderPage = () => import('@/pages/CommanderPage.vue')
const PanierPage = () => import('@/pages/PanierPage.vue')

export const routes = [
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

export function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) return savedPosition
  if (to.hash) return { el: to.hash, behavior: 'smooth' }
  return { top: 0 }
}
