import { createTicket, deleteTicket, getTicket, showTicket, updateTicket } from '@/services/ticket'
import { defineStore } from 'pinia'

export const useTicketStore = defineStore('ticket', {
  state: () => ({
    tickets: [],
    loading: {
      fetch: false,
      show: false,
      create: false,
      update: false,
      delete: false,
    },
    filters: {
      search: '',
      page: 1,
    },
    pagination: {
      currentPage: 1,
      lastPage: 1,
      perPage: 10,
      total: 0,
    },
  }),
  actions: {
    async fetchTicket() {
      this.loading.fetch = true
      try {
        this.tickets = await getTicket()
      } catch (error) {
        throw error
      } finally {
        this.loading.fetch = false
      }
    },
    async showTicket(ticketId) {
      this.loading.show = true
      try {
        this.tickets = await showTicket(ticketId)
      } catch (error) {
        throw error
      } finally {
        this.loading.show = false
      }
    },
    async createTicket(title, description, categoryId, priority, status, resolvedAt, closedAt) {
      this.loading.create = true
      try {
        await createTicket(title, description, categoryId, priority, status, resolvedAt, closedAt)
      } catch (error) {
        throw error
      } finally {
        this.loading.create = false
      }
    },
    async updateTicket(
      ticketId,
      title,
      description,
      categoryId,
      assignedTo,
      priority,
      status,
      resolvedAt,
      closedAt,
    ) {
      this.loading.update = true
      try {
        await updateTicket(
          ticketId,
          title,
          description,
          categoryId,
          assignedTo,
          priority,
          status,
          resolvedAt,
          closedAt,
        )
      } catch (error) {
        throw error
      } finally {
        this.loading.update = false
      }
    },
    async deleteTicket(ticketId) {
      this.loading.delete = true
      try {
        await deleteTicket(ticketId)
      } catch (error) {
        throw error
      } finally {
        this.loading.delete = false
      }
    },
  },
})
