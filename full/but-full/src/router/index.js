import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AddCardPage from '../views/AddCardPage.vue'
import AboutPage from '../views/AboutPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/addCard',
      name: 'addCard',
      component: AddCardPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    }
  ]
})

export default router
