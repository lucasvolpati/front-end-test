import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/novo-usuario',
    name: 'newUser',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewUserView.vue')
  },
  {
    path: '/login',
    name: 'userLogin',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/LoginView.vue')
  },
  {
    path: '/area-restrita',
    name: 'restrict',
    component: () => import(/* webpackChunkName: "about" */ '../views/RestrictAreaView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
