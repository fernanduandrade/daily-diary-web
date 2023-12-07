<script lang="ts" setup>
import type { ApiResponse } from '~/common/types/apiResponse'
import authStore from '~/features/auth/store/'
import type { User } from '~/features/auth/types'
import { required, email, helpers } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

useHead({
  title: 'Login'
})

const useAuth = authStore()
const { $toast } = useNuxtApp()

const form = reactive({
  email: '',
  password: ''
})

const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage('Email is required', required),
      email: helpers.withMessage('Invalid email format', email)
    },
    password: {
      required: helpers.withMessage('Password is required', required)
    }
  }
})

const v$ = useVuelidate(rules, form)

const loginUser = async () => {
  v$.value.$validate()
  if (v$.value.$error) {
    v$.value.$errors.forEach(error => $toast.warning(error.$message.toString()))
    return
  }
  const { data, error } = await useFetch<ApiResponse<User>>('http://localhost:5204/api/users/login', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: form
  })
  if (error.value?.statusCode === 400) {
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
      <h1 class="text-5xl mb-3 font-normal font-ephesis">Diary</h1>

      <form @submit.prevent="loginUser" class="w-full flex flex-col gap-2">
        <CommonVInput @change="v$.email.$touch" :float-label="true" label="Email" v-model="form.email" type="email" />
        <CommonVInput @change="v$.password.$touch" :float-label="true" label="Password" v-model="form.password"
          type="password" />

        <CommonVButton type="submit">Login</CommonVButton>
        <span class="text-md text-blue-400 hover:cursor-pointer hover:text-blue-600 self-end">Forgot password?</span>

        <CommonDivider />

        <CommonVButton :primary="false">
          <NuxtLink to="/register">Sign up</NuxtLink>
        </CommonVButton>
      </form>


    </div>
  </main>
</template>