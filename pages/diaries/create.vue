<script lang="ts" setup>
import useVuelidate from '@vuelidate/core';
import { helpers, required, email } from '@vuelidate/validators';
import type { ApiResponse } from '~/common/types/apiResponse';
import type { Diary } from '~/features/diaries/types/index'

const { $toast } = useNuxtApp()
const authStore = useAuthStore()

definePageMeta({
  auth: true,
  layout: 'the-nav-bar'
})

onMounted(() => {
})

const form = reactive({
  isPublic: false,
  title: '',
  text: '',
  mood: '',
  userId: authStore.getUserId
})

const rules = computed(() => {
  return {
    title: {
      required: helpers.withMessage('Title is missing', required),
    },
    text: {
      required: helpers.withMessage('Text is missing', required)
    },
    mood: {
      required: helpers.withMessage('Mood is missing', required)
    }
  }
})

const v$ = useVuelidate(rules, form)

async function createDiary() {
  v$.value.$validate()
  if (v$.value.$error) {
    v$.value.$errors.forEach(error => $toast.warning(error.$message.toString()))
    return
  }

  const { data, error } = await useFetch<ApiResponse<Diary>>('http://localhost:5204/api/diaries', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${authStore.getBearer}`
    },
    method: 'POST',
    body: form
  })
  
  console.log(error.value?.statusCode)
  if(error.value?.statusCode === 400) {
    $toast.warning(error.value.data.description)
    return
  }

  $toast.success('Your diary was written successfully.')
  navigateTo('/')
}
</script>

<template>
  <main class="h-full flex justify-center flex-col">
    <NuxtLayout />
    <main class="flex mt-4 self-center justify-center h-[700px] shadow-md w-1/2 bg-white p-2 rounded-sm">
      <form @submit.prevent="createDiary" class="w-full p-4 flex flex-col gap-3">
        <div class="self-center border-b-2 border-black">
          <CommonVInputOutline v-model="form.title" placeholder="Title" />
        </div>
        
        <div class="flex gap-4 justify-around ">
          <div>
            <CommonVCheckbox v-model="form.isPublic" type="checkbox" label="Is public?" />
          </div>

          <div>
            <div class="flex justify-center items-center p-0 m-0 gap-3">
              <input type="text" name="mood" v-model="form.mood" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
              class="outline-0" placeholder="Mood"
              >
            </div>
          </div>
          
        </div>
        
        <div class="h-[80%] mb-8">
          <CommonVTextAreaWrite class="h-full" label="Write here" v-model="form.text" />
        </div>

        <div class="self-start w-[30%]">
            <CommonVButton type="submit">Publish</CommonVButton>
        </div>
      </form>
    </main>
  </main>
</template>