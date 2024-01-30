
<script lang="ts" setup>
import type { Diary } from '~/features/diaries/types';

const props = defineProps({
  diary: {
    type: Object as PropType<Diary>,
    required: true
  }
})

const getDateDiff = (createdAtDate: Date) => {
  const createdDate = new Date(createdAtDate);
  const currentDate = new Date();

  const timeDifference: number = currentDate.getTime() - createdDate.getTime();

  const minutesDifference = Math.floor(timeDifference / (1000 * 60));
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  // Determine the appropriate output based on the time difference
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

</script>

<template>
  <main class="flex flex-col p-3 bg-white rounded-md justify-start gap-1">
    <div class="flex justify-between">
      <span class="hover:cursor-pointer text-sm font-medium text-gray-700" title="User">
        @{{ diary.user?.name }}
      </span>
      <span>{{ publishDate }} </span>
    </div>
    <span class="text-2xl hover:cursor-pointer" title="Title">{{ diary.title }}</span>
    <div
      class="p-2 w-full flex justify-center gap-[10rem]"
      v-if="diary.isPublic"
    >
      <div
        title="Favorite"
        class="rounded-full w-[37px] p-2 h-[37px] flex items-center justify-center">
        <font-awesome-icon class="text-[25px] text-red-600" icon="fa-solid fa-heart" />
      </div>
      <div
        title="Comment"
        class="rounded-full w-[37px] p-2 h-[37px] flex items-center justify-center">
        <font-awesome-icon class="text-[25px] text-blue-400" icon="fa-solid fa-comment" />
      </div>
      <div
        class="rounded-full w-[37px] p-2 h-[37px] flex items-center justify-center">
        <font-awesome-icon class="text-[25px]" icon="fa-solid fa-share" />
      </div>
    </div>
  </main>
</template>

<style>

</style>