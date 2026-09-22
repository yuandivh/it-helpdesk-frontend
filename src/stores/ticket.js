import { createTicket, deleteTicket, getTicket, showTicket, updateTicket } from '@/services/ticket'
import { defineStore } from 'pinia'

export const useTicketStore = defineStore('ticket', {
  state: () => ({
    tickets: [],
    statistics: {
      open: 0,
      in_progress: 0,
      resolved: 0
    },
    loading: {
      fetch: false,
      show: false,
      create: false,
      update: false,
      delete: false,
      loadMore:false,
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
    async fetchTicket(append = false) {
      if (!append){
        this.loading.fetch = true
        this.default()
      } else {
        this.loading.loadMore = true
      }
      const params = new URLSearchParams()
      if(this.filters.page !== null){
        params.append("page", this.filters.page)
      }
      if(this.filters.search !== null){
        params.append("search",  this.filters.search)
      }
      try {
        const response = await getTicket(params)
        if(append) {
          this.tickets.push(...response.data.data)
        }
        else{
          this.tickets = response.data.data
        }
        this.statistics.open = response.statistics.open
        this.statistics.in_progress = response.statistics.in_progress
        this.statistics.resolved = response.statistics.resolved
        this.pagination.currentPage = response.data.current_page
        this.pagination.lastPage = response.data.last_page
        this.pagination.perPage = response.data.per_page
        this.pagination.total = response.data.total
      } catch (error) {
        this.tickets = []
        throw error
      } finally {
        if(!append){
          this.loading.fetch = false
        }
        else{
          this.loading.loadMore = false
        }
      }
    },
    async showTicket(ticketId) {
      this.loading.show = true
      try {
        const response = await showTicket(ticketId)
        this.tickets = response.data
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
    async loadMoreTicket(){
      if(this.loading.loadMore) return
      if(this.pagination.currentPage >= this.pagination.lastPage) return
      this.filters.page = this.pagination.currentPage + 1
      await this.fetchTicket(true)
    },
    default(){
      this.filters.page = 1
      this.filters.search = ""
      this.filters.status = ""
      this.pagination.currentPage = 1
      this.pagination.lastPage = 1
      this.pagination.perPage = 10
      this.pagination.total = 0
    }
  },
  getters: {
    totalTickets: (state) => state.pagination.total,
  }
})
