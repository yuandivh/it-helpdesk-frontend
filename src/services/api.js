import { useAuthStore } from "@/stores/auth"

const API_URL = import.meta.env.VITE_API_URL

export async function apiFetch(endpoints, options = {}){
  const token = localStorage.getItem('token')
  const response = await fetch(`${API_URL}${endpoints}`,{
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && {
        Authorization: `Bearer ${token}`
      }),
      ...options.headers,
    }
  })
  
  return response
}
