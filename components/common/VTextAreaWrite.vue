<script lang="ts" setup>

defineEmits(['update:modelValue'])
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  label: {
    type: String
  }
})
</script>

<template>
<main>
  <label for="message" class="block text-md font-bold text-gray-900 dark:text-white">
    {{ label }}
  </label>
  <textarea :value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)" id="message" class="h-full font-ephesis text-3xl block p-1 w-full font-semibold tracking-tight text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
</main>
</template>

<style>
textarea {
  background-image: linear-gradient(white 40%, rgb(241, 241, 241) 40%);
  background-size: 100% 5rem;
  width: 100%;
  padding: 4px 8px;
}
</style>