
<script lang="ts" setup>
import type { Diary } from '~/features/diaries/types';

const authStore = useAuthStore()

const props = defineProps({
  diary: {
    type: Object as PropType<Diary>,
    required: true
  }
})

const emit = defineEmits(['updateCounter'])

const getDateDiff = (createdAtDate: Date) => {
  const createdDate = new Date(createdAtDate);
  const currentDate = new Date();

  const timeDifference: number = currentDate.getTime() - createdDate.getTime();

  const minutesDifference = Math.floor(timeDifference / (1000 * 60));
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));

  if (minutesDifference < 60) {
      return `Posted on ${minutesDifference} min ago`
  }
  if (hoursDifference < 24) {
      return `Posted on ${hoursDifference} hours ago`;
  }
  const monthName = createdDate.toLocaleString('default', { month: 'short' })
  return `Posted on ${monthName} ${createdAtDate.getDate()}`
}

const publishDate = computed(() => {
  const diaryDate = new Date(props.diary.createdAt)
  return getDateDiff(diaryDate)
})

const favoriteDiary = async (isFavorited: boolean) => {
  const counter = isFavorited ? 1 : -1
  props.diary.likesCount! += counter

  
  const payload = {
    userId: props.diary.user?.id,
    diaryId: props.diary.id
  }
  const type = isFavorited ? 'favorite' : 'unfavorite'
  return await useFetch(`http://localhost:5204/api/likes/${type}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${authStore.getBearer}`
      },
      method: 'POST',
      body: payload
    })
    
}

</script>

<template>
  <main class="flex flex-col p-3 bg-white rounded-md justify-start gap-1">
    <div class="flex justify-between">
      <span class="hover:cursor-pointer text-sm font-medium text-gray-700" title="User">
        @{{ diary.user?.name }}
      </span>
      <span>{{ publishDate }} </span>
    </div>
    <NuxtLink :to="`/diaries/${diary.id}`">
      <span class="text-2xl hover:cursor-pointer" title="Title">{{ diary.title }}</span>
    </NuxtLink>
    <div
      class="p-2 w-full flex justify-center gap-[10rem]"
      v-if="diary.isPublic"
    >
      <div
        @click="favoriteDiary(diary.isFavorited = !diary.isFavorited)"
        title="Favorite"
        class="transition ease-in-out rounded-full w-[37px] p-2 h-[37px] hover:bg-red-100 hover:cursor-pointer flex items-center justify-center gap-1">
        <font-awesome-icon class="text-[25px] text-red-600"
          :icon="diary.isFavorited ? 'fa-solid fa-heart' : 'fa-regular fa-heart'"
          />
        <span>{{ diary.likesCount }}</span>
      </div>
      <div
        title="Comment"
        class="transition ease-in-out rounded-full w-[37px] p-2 h-[37px] hover:cursor-pointer hover:bg-blue-100 flex items-center justify-center">
        <font-awesome-icon class="text-[25px] text-blue-400" icon="fa-regular fa-comment" />
      </div>
      <div
        title="Share"
        class="transition ease-in-out rounded-full w-[37px] p-2 h-[37px] hover:cursor-pointer hover:bg-blue-100 flex items-center justify-center">
        <font-awesome-icon class="text-[25px] hover:text-blue-400" icon="fa-regular fa-share-square" />
      </div>
    </div>
  </main>
</template>

<style>

</style>