<script lang="ts" setup>
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  password: '',
})


const registerUser = async () => {
  const { data, error } = await useFetch('http://localhost:5204/api/users',{
    headers: {
      'Contect-Type': 'application/json',
      'client-plataform': 'browser'
    },
    method: 'POST',
    body: form
  })

  // if(error){
  //   console.log('caiu aqui mesmo n tendo que cair')
  //   errors.value = error.value
  //   return
  // }

  return navigateTo('/login')
}
</script>

<template>
  <main class="flex items-center justify-center h-screen bg-cyan-50">
    <div class="flex p-4 justify-center shadow-md items-center flex-col gap-2 w-[35%] bg-white rounded">
      <h1 class="text-5xl font-normal font-ephesis">DIARY</h1>

      <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 w-full">
      <form @submit.prevent="registerUser" class="w-full flex flex-col gap-2">
        <CommonVInput label="Name" v-model="form.name" />
        <CommonVInput label="Email" v-model="form.email" type="email"/>
        <CommonVInput label="Password" v-model="form.password" type="password" />
        <CommonVInput label="Confirm password" v-model="form.password" type="password" />
        <button
          type="submit"
          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Register
        </button>
      </form>
      
    
    </div>
  </main>
</template>