<script lang="ts" setup>
import { reactive } from 'vue'
import { required, email, maxLength, minLength, helpers } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

const { $toast } = useNuxtApp()

useHead({
  title: 'Register user',
})

definePageMeta({
  auth: false
})

const validatePassword = ref('')

const form = reactive({
  name: '',
  email: '',
  password: '',
})

const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage('Email is required', required),
      email: helpers.withMessage('Invalid email format',email) 
    },
    name: {
      required: helpers.withMessage('Name is required', required),
      minLength: maxLength(50)
    },
    password: {
      required: helpers.withMessage('Password is required', required),
      minLength: minLength(11)
    }
  }
})

const v$ = useVuelidate(rules, form)

const registerUser = async () => {
  v$.value.$validate()
  if (v$.value.$error || !validatePassword.value) {
    v$.value.$errors.forEach(error => $toast.warning(error.$message.toString()))
    return
  }
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
        <h1 class="text-5xl font-normal font-ephesis">Diary <font-awesome-icon icon="fa-solid fa-feather-pointed" /></h1>
      </div>

      <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 w-full">
      <form @submit.prevent="registerUser" class="w-full flex flex-col gap-2">
        <CommonVInput @change="v$.name.$touch" label="Name" :float-label="true" v-model="form.name" />
        <CommonVInput @change="v$.email.$touch" label="Email" :float-label="true" v-model="form.email" type="email"/>
        <CommonVInput @change="v$.password.$touch" label="Password" :float-label="true" v-model="form.password" type="password" />
        <CommonVInput
          label="Confirm password"
          :float-label="true"
          v-model="validatePassword"
          type="password"
          :validate-call-back="validatePasswordFn"
          error-message="Passwords are not equal"/>
        <CommonVButton
          type="submit"
          >
          Register
        </CommonVButton>
      </form>
    </div>
  </main>
</template>