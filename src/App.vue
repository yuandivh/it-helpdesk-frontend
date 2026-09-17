<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from './stores/auth';

const auth = useAuthStore()
onMounted(async () =>{
  if(!auth.token) return

  try {
    await auth.fetchUser()
  } catch (error){
    console.error('Failed to restore authentication:', error)
    auth.clearAuth()
  }
})
</script>

<template>

  <router-view />


</template>
