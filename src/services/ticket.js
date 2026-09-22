import { apiFetch } from './api'

export async function getTicket(query) {
  const res = await apiFetch(`/api/tickets?${query}`)
  const data = await res.json()
  if (!res.ok) {
    throw ({
      status: res.status,
      message: data.message || 'Failed to fetch ticket',
      errors: data.errors,
    })
  }
  return data
}

export async function showTicket(ticketId) {
  const res = await apiFetch(`/api/tickets/${ticketId}`)
  const data = await res.json()
  if (!res.ok) {
    throw ({
      status: res.status,
      message: data.message || 'Failed to show ticket',
      errors: data.errors,
    })
  }
  return data
}

export async function createTicket(
  title,
  description,
  categoryId,
  priority,
  status,
  resolvedAt,
  closedAt,
) {
  const res = await apiFetch('/api/tickets', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      description: description,
      category_id: categoryId,
      priority: priority,
      status: status,
      resolved_at: resolvedAt,
      closed_at: closedAt,
    }),
  })
  const data = await res.json()
  if(!res.ok){
    throw ({
      status: res.status,
      message: data.message || "Failed to create ticket",
      errors: data.errors
    })
  }
  return data
}

export async function updateTicket(
  ticketId,
  title,
  description,
  categoryId,
  assignedTo,
  priority,
  status,
  resolvedAt,
  closedAt,
){
  const res = await apiFetch(`/api/tickets/${ticketId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title: title,
      description: description,
      category_id: categoryId,
      assigned_to: assignedTo,
      priority: priority,
      status: status,
      resolved_at: resolvedAt,
      closed_at: closedAt,
    }),
  })
  const data = await res.json()
  if(!res.ok){
    throw ({
      status: res.status,
      message: data.message || "Failed to update ticket",
      errors: data.errors
    })
  }
  return data
}

export async function deleteTicket(ticketId){
  const res = await apiFetch(`/api/tickets/${ticketId}`,{
    method: 'DELETE'
  })
  const data = await res.json()
  if(!res.ok){
    throw ({
      status: res.status,
      message: data.message || "Failed to delete ticket",
      errors: data.errors
    })
  }
  return data
}
