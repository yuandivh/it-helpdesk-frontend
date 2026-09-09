import { useAuthStore } from "@/stores/auth"

const API_URL = import.meta.env.VITE_API_URL

export async function apiFetch(endpoints, options = {}){
  const auth = useAuthStore()
  const response = await fetch(`${API_URL}${endpoints}`,{
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && {
        Authorization: `Bearer ${auth.token}`
      }),
      ...options.headers,
    }
  })
  if(!response.ok){
    throw new Error(data.message || 'Something went wrong')
  }
  return response
}
