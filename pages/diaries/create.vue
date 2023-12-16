<script lang="ts" setup>
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
  mood: ''
})
function createDiary() {
  console.log(form)
}
</script>

<template>
  <main class="h-full flex justify-center flex-col bg-cyan-100">
    <NuxtLayout />
    <main class="flex mt-4 self-center justify-center h-[700px] shadow-md w-1/2 bg-white p-2 rounded-sm">
      <form @submit.prevent="createDiary" class="w-full p-4 flex flex-col gap-3">
        <div class="self-center">
          <input
          class="font-ephesis border-none outline-0 text-center capitalize text-3xl placeholder:text-center" 
          type="text" :value="form.title" placeholder="title">
        </div>
        
        <div class="flex gap-4 justify-around">
          <div>
            <CommonVCheckbox v-model="form.isPublic" type="checkbox" label="Is public?" />
          </div>

          <div>
            <div class="flex justify-center items-center p-0 m-0 gap-3">
              <input type="text" name="mood" :value="form.mood"
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