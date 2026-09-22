import DashboardLayout from '@/layouts/DashboardLayout.vue'
import { useAuthStore } from '@/stores/auth'
import AllTicketView from '@/views/AllTicketView.vue'
import DashboardView from '@/views/DashboardView.vue'
import LoginView from '@/views/LoginView.vue'
import TicketDetailView from '@/views/TicketDetailView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        guest: true,
      },
    },
    {
      path: '/',
      component: DashboardLayout,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: '',
          name: 'dashboard',
          component: DashboardView,
        },
        {
          path: 'tickets',
          name: 'tickets',
          component: AllTicketView,
        },
        {
          path: '/tickets/:id',
          name: 'ticket-detail',
          component: TicketDetailView
        }
      ],
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
