import { createComment, deleteComment, getComment, updateComment } from '@/services/ticketComment'
import { defineStore } from 'pinia'

export const useTicketCommentStore = defineStore('ticketComment', {
  state: () => ({
    comments: [],
    loading: {
      fetch: false,
      create: false,
      update: false,
      delete: false,
    },
    filters: {
      page: 1,
    },
    pagination: {
      currentPage: 1,
      lastPage: 1,
      perPage: 10,
      total: 1,
    },
  }),
  actions: {
    async fetchComment(ticketId){
      this.loading.fetch = true
      try{
        this.comments = await getComment(ticketId)
      } catch (error) {
        throw error
      } finally {
        this.loading.fetch = false
      }

    },
    async createComment(ticketId, message){
      this.loading.create = true
      try {
        await createComment(ticketId, message)
      } catch (error) {
        throw error
      } finally {
        this.loading.create = false
      }
    },
    async updateComment(ticketId, commentId, message){
      this.loading.update = true
      try {
        await updateComment(ticketId, commentId, message)
      } catch (error) {
        throw error
      } finally {
        this.loading.update = false
      }
    },
    async deleteComment(ticketId, commentId){
      this.loading.delete = true
      try {
        await deleteComment(ticketId, commentId)
      } catch (error) {
        throw error
      } finally {
        this.loading.delete = false
      }
    }
  }
})
