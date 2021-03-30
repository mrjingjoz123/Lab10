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
    path: '/form',
    name: 'form',
    component: () => import('../views/Form.vue')
  },
  {
    path: '/showview',
    name: 'showview',
    component: () => import('../views/ShowView.vue')
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import('../views/Table.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () => import('../views/Counter.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/users2')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
