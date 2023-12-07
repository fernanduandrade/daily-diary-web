<script lang="ts" setup>
import { reactive } from 'vue';
const { $toast } = useNuxtApp()

useHead({
  title: 'Register user'
})

const validatePassword = ref('')
const form = reactive({
  name: '',
  email: '',
  password: '',
})

const registerUser = async () => {
  const { error } = await useFetch('http://localhost:5204/api/users',{
    headers: {
      'Contect-Type': 'application/json',
      'client-plataform': 'browser'
    },
    method: 'POST',
    body: form
  })
  
  if(error.value?.statusCode === 400){
    $toast.warning(error.value.data.description)
    return
  }

  return navigateTo('/login')
}

const validatePasswordFn = (confirmPassword: string) => {
  const matchPasswords = form.password == confirmPassword
  return matchPasswords
}
</script>

<template>
  <main class="flex items-center justify-center h-screen bg-cyan-50">
    <div class="flex p-4 justify-center shadow-md items-center flex-col gap-2 w-[35%] bg-white rounded">
      <div class="flex items-center w-full gap-64">
          <NuxtLink :to="'/login'" title="Back">
            <font-awesome-icon class="hover:cursor-pointer" icon="fa-solid fa-chevron-left" />
          </NuxtLink>
        <h1 class="text-5xl font-normal font-ephesis">Diary</h1>
      </div>

      <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 w-full">
      <form @submit.prevent="registerUser" class="w-full flex flex-col gap-2">
        <CommonVInput label="Name" :float-label="true" v-model="form.name" />
        <CommonVInput label="Email" :float-label="true" v-model="form.email" type="email"/>
        <CommonVInput label="Password" :float-label="true" v-model="form.password" type="password" />
        <CommonVInput
          label="Confirm password"
          :float-label="true"
          v-model="validatePassword"
          type="password"
          :validate-call-back="validatePasswordFn"
          error-message="Passwords are not equal"/>
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