<script setup>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import { ref } from 'vue';
const sidebarOpen = ref(false)
</script>
<template>
  <div class="flex min-h-screen">
    <div class="hidden md:flex md:w-1/5 shadow-md flex-col">
      <Sidebar/>
    </div>

    <!-- Mobile Overlay -->
    <div
      v-if="sidebarOpen"
      class="fixed inset-0  bg-black/50 md:hidden"
      @click="sidebarOpen = false"
    ></div>

    <!-- Mobile Sidebar -->
    <div
      v-if="sidebarOpen"
      class="fixed inset-y-0 w-72 bg-white shadow-xl md:hidden flex flex-col"
    >
      <Sidebar />
    </div>

    <div class="w-full md:w-4/5 flex flex-col shadow-md">
      <Navbar @toggle-sidebar="sidebarOpen = !sidebarOpen"/>
      <main class="flex-1">
        <RouterView/>
      </main>
    </div>
  </div>
</template>
