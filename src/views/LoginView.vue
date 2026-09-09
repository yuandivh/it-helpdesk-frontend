<script setup>
import loginAsset from '../assets/login.svg'
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-2xl border-2 rounded-md p-4 bg-white border-gray-300 shadow-md">
      <div class="flex justify-center items-center">
          <div class="flex-row mx-10 my-10 w-full">
              <div class="font-bold text-2xl mb-10 text-center">Welcome Back 👋🏻</div>
              <input type="email" name="email" placeholder="Email" id="" class="border border-gray-300 rounded-md p-2 mb-4 w-full transition ease-in-out focus:-translate-y-0.5 focus:scale-103">
              <input type="password" name="password" placeholder="Password" id="" class="border border-gray-300 rounded-md p-2 mb-10 w-full transition ease-in-out focus:-translat-y-0.5 focus:scale-103">
              <button type="submit" class="px-4 py-2 bg-blue-500 hover:bg-blue-600 hover:-translate-y-1 hover:scale-105 transition ease-in-out duration 300 text-white rounded-md w-full shadow-md cursor-pointer">Log in</button>
          </div>
          <div>
            <img :src="loginAsset" alt="loginAsset" srcset="" class="h-100 w-180 object-cover p-4" >
          </div>
      </div>
    </div>
  </div>
</template>
