<script setup>
import { useTicketStore } from '@/stores/ticket';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const ticketStore = useTicketStore()
const ticketId = route.params.id

onMounted(async () => {
  try {
    await ticketStore.showTicket(ticketId)
  } catch (error){
    console.log(error)
  }
  console.log("data: ",ticketStore.tickets)
})
</script>
<template>
  <div class="p-8 h-full">
    <div v-if="ticketStore.loading.show" class="flex justify-center items-center h-full">
      <div class="animate-spin rounded-full h-4 w-4 p-16 border-4 border-black border-t-transparent"></div>
    </div>
    <div v-else class="leading-relaxed">
      <div class="font-bold text-2xl">
        {{ ticketStore.tickets.title }}
      </div>
      <div class="text-gray-400 text-sm">
        {{ ticketStore.tickets.ticket_number }}
      </div>
      <div>
        Priority: {{ ticketStore.tickets.priority }}
      </div>
      <div>
        Status: {{ ticketStore.tickets.status }}
      </div>
      <div>Technician: {{ ticketStore.tickets.assigned_to?.name ?? 'Unassignee' }}</div>
    </div>
  </div>
</template>
