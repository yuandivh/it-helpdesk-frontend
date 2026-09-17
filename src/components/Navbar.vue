<script setup>
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const auth = useAuthStore()
const route = useRoute()
const emit = defineEmits(['toggle-sidebar'])
</script>
<template>
  <div class="flex justify-between items-center py-4 px-8">
    <div class="flex items-center gap-3">
      <!-- Hamburger -->
      <button @click="emit('toggle-sidebar')" class="md:hidden p-2 rounded-md hover:bg-gray-100 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6"
        >
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div class="text-2xl md:text-3xl font-bold">
        {{ route.name === 'tickets' ? 'All Ticket' : 'Dashboard' }}
      </div>
    </div>
    <div class="flex items-center">
      <div class="relative w-10 h-10 overflow-hidden bg-neutral-secondary-medium rounded-full">
        <svg
          class="absolute w-10 h-10 text-body-subtle -left-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <div class="ml-4 hidden sm:block">
        <div class="font-bold text-sm md:text-md">{{ auth.user?.name }}</div>
        <div class="text-gray-400">
          {{ auth.role === 'user' ? 'User' : auth.role === 'admin' ? 'Admin' : 'Technician' }}
        </div>
      </div>
    </div>
  </div>
  <div class="border-b-2 border-gray-100"></div>
</template>
