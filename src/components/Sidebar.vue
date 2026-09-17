<script setup>
import { useAuthStore } from '@/stores/auth'
import { useRoute, useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()
const route = useRoute()
async function handleLogout() {
  try {
    await auth.logout()
  } catch (err) {
    console.log(err)
  }
  router.push({ name: 'login' })
}
</script>
<template>
  <div class="text-2xl font-bold text-star py-4 px-8 border-b-2 border-gray-200">TicketDesk</div>
  <div class="p-8 flex-1 flex flex-col justify-between">
    <div>
      <RouterLink
        :to="{ name: 'dashboard' }"
        class="flex items-center text-md md:text-lg px-4 py-3 rounded-md mb-4"
        :class="
          route.name === 'dashboard'
            ? 'bg-indigo-100 text-blue-500 scale-105'
            : 'hover:bg-indigo-100 hover:-translate-y-1 hover:scale-105 transition ease-in-out'
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
          />
        </svg>
        <div>Dashboard</div>
      </RouterLink>
      <RouterLink
        :to="{ name: 'tickets' }"
        class="text-md md:text-lg hover:bg-gray-100 px-4 py-3 rounded-md flex items-center"
        :class="
          route.name === 'tickets'
            ? 'bg-indigo-100 text-blue-500 scale-105'
            : 'hover:bg-indigo-100 hover:-translate-y-1 hover:scale-105 transition ease-in-out'
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
          />
        </svg>
        <div>All Tickets</div>
      </RouterLink>
    </div>
  </div>
  <div class="border-t-2 border-gray-200 p-8">
    <button
      @click="handleLogout"
      class="w-full px-4 py-3 hover:bg-indigo-100 rounded-md cursor-pointer hover:text-red-500 hover:-translate-y-1 hover:scale-105 transition ease-in-out"
      :disabled="auth.loading.logout"
      :class="auth.loading.logout ? 'flex items-center justify-center bg-indigo-100' : ''"
    >
      <div v-if="auth.loading.logout">
        <div
          class="animate-spin rounded-full w-4 h-4 p-2 border-4 border-white border-t-transparent"
        ></div>
      </div>
      <div v-else class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
          />
        </svg>
        <span class="text-md md:text-lg">Logout</span>
      </div>
    </button>
  </div>
</template>
