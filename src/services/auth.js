import { apiFetch } from './api'

export async function login(email, password) {
  const res = await apiFetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
  const data = await res.json()

  if (!res.ok) {
    throw ({
      status: res.status,
      message: data.message || 'Failed to login',
      errors: data.errors,
    })
  }
  return data
}

export async function logout(){
  const res = await apiFetch('/api/logout',{
    method: 'POST',
  })
  const data = await res.json()
  if(!res.ok){
    throw ({
      status: res.status,
      message: data.message || "Failed to logout",
      errors: data.errors
    })
  }
  return data
}

export async function getUser(){
  const res = await apiFetch('/api/user', {
    method: 'POST'
  })
  const data = await res.json()
  if(!res.ok){
    throw ({
      status: res.status,
      message: data.message,
      errors: data.errors
    })
  }
  return data
}
