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
</script>

<template>
  <main class="h-full flex justify-center flex-col">
    <NuxtLayout />
    <main class="flex mt-4 self-center justify-center h-[700px] shadow-md w-1/2 bg-white p-2 rounded-sm">
      <form @submit.prevent="createDiary" class="w-full p-4 flex flex-col gap-3">
        <div>
            <label for="title">Title</label>
            <input type="text" name="title" placeholder="title">
          </div>
        
        <div class="flex gap-4 justify-around">
          <div>
            <label for="public">Is public?</label>
            <input type="checkbox" name="public" placeholder="public?">
          </div>

          <div>
            <label for="mood">Mood</label>
            <input type="text" name="mood" placeholder="Mood">
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