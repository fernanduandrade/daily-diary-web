<script lang="ts" setup>

defineEmits(['update:modelValue'])
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  placeholder: {
    type: String
  }
})
</script>

<template>
  <main>
    <input
          class="font-ephesis border-none outline-0 text-center capitalize text-3xl placeholder:text-center" 
          type="text" :value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
          :placeholder="placeholder">
  </main>
</template>
