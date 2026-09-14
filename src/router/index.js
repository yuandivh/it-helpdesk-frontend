import { useAuthStore } from '@/stores/auth'
import DashboardView from '@/views/DashboardView.vue'
import LoginView from '@/views/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        guest: true,
      },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: {
        requiresAuth: true,
      },
    },
  ],
})

export default router

router.beforeEach((to) => {
  const auth = useAuthStore()
  const token = auth.token

  if (to.meta.requiresAuth && !token) {
    return { name: 'login' }
  }

  if (to.meta.guest && token) {
    return { name: 'dashboard' }
  }
})
