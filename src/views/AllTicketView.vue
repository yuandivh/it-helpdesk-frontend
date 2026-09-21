<script setup>
import { useTicketStore } from '@/stores/ticket'
import { onMounted } from 'vue'

const ticketStore = useTicketStore()

onMounted(async () => {
  console.log('onMounted jalan')
  try {
    await ticketStore.fetchTicket()
    console.log('data:', ticketStore.totalTickets)
  } catch (error) {
    console.error('fetchTicket error:', error)
  }
})
</script>
<template>
  <div class="p-8 h-full">
    <div v-if="ticketStore.loading.fetch" class="flex justify-center items-center h-full">
      <div
        class="animate-spin rounded-full h-4 w-4 p-16 border-4 border-black border-t-transparent"
      ></div>
    </div>
    <div v-else class="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
      <table class="w-full text-sm text-left">
        <thead class="bg-gray-50 border-b border-gray-200">
          <tr>
            <th class="px-6 py-4 font-semibold text-gray-600">Subject</th>
            <th class="px-6 py-4 font-semibold text-gray-600">Assignee</th>
            <th class="px-6 py-4 font-semibold text-gray-600">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ticket in ticketStore.tickets" :key="ticket.id" class="text-left hover:bg-gray-50 border-b border-gray-200">
            <td class="px-6 py-4">
              <div class="font-medium text-gray-900">
                {{ ticket.title }}
              </div>
              <div class="font-xs text-gray-400 mt-1">
                {{ ticket.ticket_number }}
              </div>
            </td>
            <td class="px-6 py-4 font-semibold text-gray-600">{{ ticket.assigned_to.name ?? 'Unassignee'}}</td>
            <td class="px-6 py-4">
              <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
              :class="{
                'bg-yellow-100 text-yellow-700': ticket.status === 'OPEN',
                'bg-blue-100 text-blue-700' : ticket.status === 'IN_PROGRESS',
                'bg-orange-100 text-orange-700' : ticket.status === 'WAITING',
                'bg-green-100 text-green-700' : ticket.status === 'RESOLVED',
                'bg-gray-100 text-gray-700' : ticket.status === 'CLOSED'
              }">
              {{ ticket.status.replace('_',' ') }}
            </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
