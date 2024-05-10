import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/SignupView.vue')
    },
    {
      path: '/student',
      name: 'student',
      component: () => import('@/views/StudentView.vue')
    },
    {
      path: '/file',
      name: 'file',
      component: () => import('@/components/LoadFile.vue')
    }
  ]
})

export default router
