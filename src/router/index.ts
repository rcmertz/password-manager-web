import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/password/listar',
    name: 'password-listar',
    component: () => import('../views/password/password-list.vue')
  },
  {
    path: '/password/form',
    name: 'password-form',
    component: () => import('../views/password/password-form.vue')
  },
  {
    path: '/password/form/:model/:id',
    name: 'password-detalhar',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import('../views/password/password-form.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
