import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/clients/:id',
    name: 'clients',
    component: () => import(/* webpackChunkName: "clients/:id" */ '../views/Clients.vue')
  },
  {
    path: '/proveidors',
    name: 'Proveidors',
    component: () => import(/* webpackChunkName: "proveidors" */ '../views/Proveidors.vue')
  },
  {
    path: '/magatzem',
    name: 'Magatzem',
    component: () => import(/* webpackChunkName: "magatzem" */ '../views/Magatzem.vue')
  },
  {
    path: '/botiga/alimentacio',
    name: 'Alimentacio',
    component: () => import(/* webpackChunkName: "botiga" */ '../views/BotigaAlimentacio.vue')
  },
  {
    path: '/botiga/congelats',
    name: 'Congelats',
    component: () => import(/* webpackChunkName: "botiga" */ '../views/BotigaCongelat.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
