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
  <div>
    <div class="flex min-h-screen">
      <div class="w-1/5 shadow-md flex flex-col">
        <div class="text-2xl font-bold text-star py-6 px-8 border-b-2 border-gray-200">
          TicketDesk
        </div>
        <div class="p-8 flex-1 flex flex-col justify-between">
          <div>
            <a
              href=""
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
            </a>
            <a
              href=""
              class="text-md md:text-lg hover:bg-gray-100 px-4 py-3 rounded-md flex items-center"
              :class="
                route.name === 'tickets'
                  ? 'bg-indigo-100 text-blue-500'
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
            </a>
          </div>
        </div>
        <div class="border-t-2 border-gray-200 p-8">
            <button
              @click="handleLogout"
              class="w-full px-4 py-3 hover:bg-indigo-100 rounded-md cursor-pointer hover:text-red-500 hover:-translate-y-1 hover:scale-105 transition ease-in-out"
              :disabled="auth.loading.logout"
              :class="
                auth.loading.logout
                  ? 'flex items-center justify-center bg-indigo-100'
                  : ''
              "
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
      </div>
      <div class="w-4/5 flex flex-col shadow-md">
        <div class="flex justify-between items-center p-4">
          <div class="text-3xl font-bold">Dashboard</div>
          <div class="flex items-center">
            <div
              class="relative w-10 h-10 overflow-hidden bg-neutral-secondary-medium rounded-full"
            >
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
            <div class="ml-4">
              <div class="">{{ auth.user?.name }}</div>
              <div>
                {{ auth.role === 'user' ? 'User' : auth.role === 'admin' ? 'Admin' : 'Technician' }}
              </div>
            </div>
          </div>
        </div>
        <div class="border-b-2 border-gray-100"></div>
        <div class="p-8 mb-8">
          <div class="flex justify-between items-center">
            <div class="text-4xl text-blue-500 font-bold">Welcome {{ auth.user?.name }} 👋🏻</div>
            <a
              href=""
              class="px-4 py-3 bg-blue-500 rounded-md text-white flex items-center hover:bg-blue-600 hover:-translate-y-1 hover:scale-105 transition ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 mr-2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Create Ticket
            </a>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div class="flex items-center justify-center  space-x-10">
            <div>
              <div class="text-xl text-gray-500 font-semibold mb-2">My Tickets</div>
              <div class="text-3xl font-bold">10</div>
            </div>
            <div class="bg-sky-100 text-cyan-600 p-4 rounded-2xl text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                />
              </svg>
            </div>
          </div>
          <div class="flex items-center justify-center  space-x-10">
            <div>
              <div class="text-xl text-gray-500 font-semibold mb-2">Open</div>
              <div class="text-3xl font-bold">5</div>
            </div>
            <div class="bg-lime-100 text-yellow-600 p-4 rounded-2xl text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </div>
          </div>
          <div class="flex items-center justify-center  space-x-10">
            <div>
              <div class="text-xl text-gray-500 font-semibold mb-2">In Progress</div>
              <div class="text-3xl font-bold">5</div>
            </div>
            <div class="bg-violet-100 text-purple-600 p-4 rounded-2xl text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                />
              </svg>
            </div>
          </div>
          <div class="flex items-center justify-center  space-x-10">
            <div>
              <div class="text-xl text-gray-500 font-semibold mb-2">Resolved</div>
              <div class="text-3xl font-bold">5</div>
            </div>
            <div class="bg-green-100 text-emerald-600 p-4 rounded-2xl text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
