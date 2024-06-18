import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/index.vue'

// component: () => import('../views/AboutView.vue')
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
  ]
})