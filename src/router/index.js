import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WIProgress from '../views/WIP.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: WIProgress,
    },
    {
      path: '/research',
      name: 'research',
      component: WIProgress,
    },
    {
      path: '/about',
      name: 'about',
      component: WIProgress,
    },
  ],
})

export default router
