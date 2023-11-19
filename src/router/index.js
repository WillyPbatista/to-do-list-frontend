import { createRouter, createWebHistory } from 'vue-router'
import Task from '@/views/Task.vue'

const routes = [
  {
    path: '/',
    name: 'task',
    component: Task
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
