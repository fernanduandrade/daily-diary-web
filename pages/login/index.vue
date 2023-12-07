<script lang="ts" setup>
import type { ApiResponse } from '~/common/types/apiResponse';
import authStore from '~/features/auth/store/'
import type { User } from '~/features/auth/types';

useHead({
  title: 'Login'
})

const useAuth = authStore()
const { $toast } = useNuxtApp()

const form = reactive({
  email: '',
  password: '' 
})

const loginUser = async () => {
  const  { data, error } = await useFetch<ApiResponse<User>>('http://localhost:5204/api/users/login', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body:  form
  })
  if(error.value?.statusCode === 400){
    $toast.warning(error.value.data.description)
    return
  }

  useAuth.setUserLogged(data.value!.data)
  goToDash()
}

const goToDash = () => navigateTo('/')
</script>

<template>
  <main class="flex items-center justify-center h-screen bg-cyan-50">
    <div class="flex p-4 justify-center shadow-md items-center flex-col gap-2 w-[35%] bg-white rounded">
      <h1 class="text-5xl font-normal font-ephesis">Diary</h1>
      
      <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 w-full">
      <form @submit.prevent="loginUser" class="w-full flex flex-col gap-2">
        <CommonVInput :float-label="true" label="John" v-model="form.email" type="email" />
        <CommonVInput :float-label="true" label="Password" v-model="form.password" type="password" />
        <button type="submit" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">LOGIN</button>
        <button
          type="button"
          class="text-gray-900 uppercase bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            <NuxtLink to="/register">sign up</NuxtLink>
        </button>
      </form>
      
    
    </div>
  </main>
</template>