<script setup>
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const auth = useAuthStore()
const router = useRouter()

async function handleLogout(){
  try{
    await auth.logout()
  }catch(err){
    console.log(err)
  }
  router.push({name: 'login'})
}
</script>
<template>
  Dashboard Technician
  <button type="submit" @click="handleLogout" class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md shadow-md cursor-pointer">
    Logout
  </button>
</template>
