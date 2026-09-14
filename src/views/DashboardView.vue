<script setup>
import AdminDashboardView from '@/components/dashboard/AdminDashboardView.vue'
import TechnicianDashboardView from '@/components/dashboard/TechnicianDashboardView.vue'
import UserDashboardView from '@/components/dashboard/UserDashboardView.vue'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
</script>
<template>
  <AdminDashboardView v-if="auth.role === 'admin'"></AdminDashboardView>

  <TechnicianDashboardView v-if="auth.role === 'technician'"></TechnicianDashboardView>

  <UserDashboardView v-if="auth.role === 'user'"></UserDashboardView>
</template>
