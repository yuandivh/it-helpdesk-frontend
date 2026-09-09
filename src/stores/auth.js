import { getUser, login, logout } from '@/services/auth'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    loading: {
      login: false,
      logout: false,
    },
  }),
  actions: {
    clearAuth() {
      this.user = null
      this.token = null
      localStorage.removeItem('token')
    },
    async fetchUser() {
      try {
        this.user = await getUser()
      } catch (error) {
        throw error
      }
    },
    async login(email, password) {
      this.loading.login = true
      try {
        const data = await login(email, password)
        this.token = data.token
      } catch (error) {
        throw error
      } finally {
        this.loading.login = false
      }
    },
    async logout() {
      this.loading.logout = true
      try {
        await logout()
        this.clearAuth()
      } catch (error) {
        throw error
      } finally {
        this.loading.logout = false
      }
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
})
