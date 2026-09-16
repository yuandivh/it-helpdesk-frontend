import { apiFetch } from "./api";

export async function getComment(ticketId){
  const res  = apiFetch(`/api/tickets/${ticketId}/comments`)
  const data = await res.json()
  if(!res.ok){
    throw ({
      status: res.status,
      message: data.message || "Failed to fetch comment",
      errors: data.errors
    })
  }
  return data
}

export async function createComment(ticketId, message){
  const res  = apiFetch(`/api/tickets/${ticketId}/comments`,{
    method: 'POST',
    body: JSON.stringify({
      message: message
    })
  })
  const data = await res.json()
  if(!res.ok){
    throw ({
      status: res.status,
      message: data.message || "Failed to create comment",
      errors: data.errors
    })
  }
  return data
}

export async function updateComment(ticketId, commentId, message){
  const res  = apiFetch(`/api/tickets/${ticketId}/comments/${commentId}`,{
    method: 'PUT',
    body: JSON.stringify({
      message: message
    })
  })
  const data = await res.json()
  if(!res.ok){
    throw ({
      status: res.status,
      message: data.message || "Failed to update comment",
      errors: data.errors
    })
  }
  return data
}

export async function deleteComment(ticketId, commentId){
  const res  = apiFetch(`/api/tickets/${ticketId}/comments/${commentId}`,{
    method: 'DELETE',
  })
  const data = await res.json()
  if(!res.ok){
    throw ({
      status: res.status,
      message: data.message || "Failed to delete comment",
      errors: data.errors
    })
  }
  return data
}
