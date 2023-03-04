import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import EditCardPage from '../views/EditCardPage.vue'
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
      path: '/editCard/:id',
      name: 'editCard',
      component: EditCardPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    }
  ]
})

export default router
