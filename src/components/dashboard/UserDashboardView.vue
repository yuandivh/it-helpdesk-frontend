<script setup>
import { useAuthStore } from '@/stores/auth'
import { useTicketStore } from '@/stores/ticket';
import { onMounted } from 'vue';

const auth = useAuthStore()
const ticket = useTicketStore()

onMounted(async () => {
  try{
    await ticket.fetchTicket()
  }catch (error){
    console.log(error)
  }
})

</script>

<template>
  <div class="p-8 h-full">
    <div v-if="ticket.loading.fetch" class="flex justify-center items-center h-full">
      <div class="animate-spin rounded-full h-4 w-4 p-16 border-4 border-black border-t-transparent"></div>
    </div>
    <div v-else>
      <div class="flex flex-col gap-4 sm:justify-between sm:items-center sm:flex-row mb-10">
        <div class="text-2xl sm:text-3xl md:text-4xl text-blue-500 font-bold">Welcome {{ auth.user?.name }} 👋🏻</div>
        <a
          href=""
          class="px-4 py-3 bg-blue-500 rounded-md text-white flex items-center   text-sm sm:text-md hover:bg-blue-600 hover:-translate-y-1 hover:scale-105 transition ease-in-out"
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
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm sm:text-xl text-gray-500 font-semibold mb-2">My Tickets</div>
            <div class="text-2xl sm:text-3xl font-bold">{{ ticket.totalTickets }}</div>
          </div>
          <div class="bg-sky-100 text-cyan-600 p-3 rounded-xl md:p-4 md:rounded-2xl text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-7 md:size-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
              />
            </svg>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm sm:text-xl text-gray-500 font-semibold mb-2">Open</div>
            <div class="text-2xl sm:text-3xl font-bold">{{ ticket.statistics.open }}</div>
          </div>
          <div class="bg-lime-100 text-yellow-600 p-3 rounded-xl md:p-4 md:rounded-2xl text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-7 md:size-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm sm:text-xl text-gray-500 font-semibold mb-2">In Progress</div>
            <div class="text-2xl sm:text-3xl font-bold">{{ ticket.statistics.in_progress }}</div>
          </div>
          <div class="bg-violet-100 text-purple-600 p-3 rounded-xl md:p-4 md:rounded-2xl text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-7 md:size-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm sm:text-xl text-gray-500 font-semibold mb-2">Resolved</div>
            <div class="text-2xl sm:text-3xl font-bold">{{ ticket.statistics.resolved }}</div>
          </div>
          <div class="bg-green-100 text-emerald-600 p-3 rounded-xl md:p-4 md:rounded-2xl text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-7 md:size-8"
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
</template>
