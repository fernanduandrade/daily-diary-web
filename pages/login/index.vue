<script lang="ts" setup>

const form = reactive({
  email: '',
  password: '' 
})

const loginUser = async () => {
  const  { data, error } = await useFetch('http://localhost:5204/api/users/login', {
    headers: {
      'Content-Type': 'application/json',
      'client-plataform': 'browser'
    },
    method: 'POST',
    body:  form
  })
}

const goToRegister = () => {
  navigateTo('/register')
}
const value = ref('')
</script>

<template>
  <main class="flex items-center justify-center h-screen bg-cyan-50">
    <div class="flex p-4 justify-center shadow-md items-center flex-col gap-2 w-[35%] bg-white rounded">
      <h1 class="text-5xl font-normal font-ephesis">DIARY</h1>

      <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 w-full">
      <form @submit.prevent="loginUser" class="w-full flex flex-col gap-2">
        <CommonVInput label="Email" v-model="form.email" type="email" placeholder="John" />
        <CommonVInput label="Password" v-model="form.password" type="password" placeholder="Password" />
        <button type="submit" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">LOGIN</button>
        <button
          @click="goToRegister"
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            <NuxtLink to="/register">SIGN UP</NuxtLink>
        </button>
      </form>
      
    
    </div>
  </main>
</template>