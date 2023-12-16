<script lang="ts" setup>
definePageMeta({
  auth: true,
  layout: 'the-nav-bar'
})

onMounted(() => {
  console.log('ao menos tá caindo aqui?')
})
const test = ref('')
function createDiary() {}
const isPublic = ref(false)
</script>

<template>
  <main class="h-full flex justify-center flex-col bg-cyan-100">
    <NuxtLayout />
    <main class="flex mt-4 self-center justify-center h-[700px] shadow-md w-1/2 bg-white p-2 rounded-sm">
      <form @submit.prevent="createDiary" class="w-full p-4 flex flex-col gap-3">
        <div class="self-center">
          <input
          class="font-ephesis border-none outline-none text-center capitalize text-3xl placeholder:text-center" 
          type="text" placeholder="title">
        </div>
        
        <div class="flex gap-4 justify-around">
          <div>
            <CommonVCheckbox v-model="isPublic" type="checkbox" label="Is public?" />
          </div>

          <div>
            <!-- <CommonVInputLabel v-model="isPublic" type="text" label="Mood" /> -->
          </div>
        </div>
        
        <div class="h-[80%] mb-8">
          <CommonVTextAreaWrite class="h-full" label="Write here" v-model="test" />
        </div>

        <div class="self-start w-[30%]">
            <CommonVButton>Publish</CommonVButton>
        </div>
      </form>
    </main>
  </main>
</template>