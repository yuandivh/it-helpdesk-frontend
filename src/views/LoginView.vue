<script setup>
import { useAuthStore } from '@/stores/auth'
import loginAsset from '../assets/login.svg'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = useAuthStore()
const email = ref(localStorage.getItem('email') ?? '')
const password = ref('')
const rememberMe = ref(localStorage.getItem('remember_me') ?? false)
const errorMessage = ref('')

async function handleLogin() {
  try {
    await auth.login(email.value, password.value)
    if(rememberMe.value){
      localStorage.setItem('email', email.value)
      localStorage.setItem('remember_me', true)
    }else{
      localStorage.removeItem('email')
      localStorage.removeItem('remember_me')
    }
    email.value = ''
    password.value = ''
    errorMessage.value = ''
    router.push({ name: 'dashboard' })
  } catch (err) {
    console.log(err)
    errorMessage.value = err.message
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-2xl border-2 rounded-md p-4 bg-white border-gray-300 shadow-md">
      <div class="flex justify-center items-center">
        <div class="flex-row mx-10 my-10 w-full">
          <div class="font-bold text-2xl mb-10 text-center">Welcome Back 👋🏻</div>
          <form @submit.prevent="handleLogin">
            <input
              type="email"
              v-model="email"
              name="email"
              placeholder="Email"
              required
              id=""
              class="border border-gray-300 rounded-md p-2 mb-6 w-full transition ease-in-out focus:-translate-y-0.5 focus:scale-103"
            />
            <input
              type="password"
              v-model="password"
              name="password"
              placeholder="Password"
              required
              id=""
              class="border border-gray-300 rounded-md p-2 mb-4 w-full transition ease-in-out focus:-translat-y-0.5 focus:scale-103"
            />
            <div class="flex justify-start mb-8 items-center">
              <input type="checkbox" v-model="rememberMe" name="" id="" class="mr-2 h-4 w-4" />
              <div class="text-sm">Remember me</div>
            </div>
            <button
              type="submit"
              class="px-4 py-2 bg-blue-500 text-white rounded-md w-full shadow-md"
              :disabled="auth.loading.login"
              :class="
                auth.loading.login
                  ? 'flex justify-center opacity-50 cursor-not-allowed'
                  : 'hover:bg-blue-600 hover:-translate-y-1 hover:scale-105 transition ease-in-out duration 300 cursor-pointer'
              "
            >
              <div
                v-if="auth.loading.login"
                class="animate-spin rounded-full h-4 w-4 p-2 border-4 border-white border-t-transparent"
              ></div>
              <div v-else>Log in</div>
            </button>
          </form>
          <div v-if="errorMessage" class="text-red-500 text-center mt-3">
            {{ errorMessage }}
          </div>
        </div>
        <div>
          <img :src="loginAsset" alt="loginAsset" srcset="" class="h-100 w-180 object-cover p-4" />
        </div>
      </div>
    </div>
  </div>
</template>
