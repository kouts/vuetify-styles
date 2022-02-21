import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/PageHome.vue'
import Page1 from '@/components/PagePage1.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/page1', component: Page1 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
