import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WIProgress from '../views/WIP.vue'
import Research from '../views/Research.vue'
import About from '../views/About.vue'

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
      component: Research,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
})

export default router
