<script lang="ts" setup>

defineEmits(['update:modelValue'])

defineProps({
  type: {
    type: String,
    require: true,
    default: 'text',
    validator(value: string) {
      return ['text', 'password', 'email'].includes(value)
    }
  },
  placeholder: {
    type: String
  },
  modelValue: {
    type: [String, Number],
    required: true
  }
})

</script>

<template>
  <div class="mt-2 w-full">
    <input
    class="border px-2 py-1 text-base w-full"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    :type="type"
    :placeholder="placeholder"
    :value="modelValue" />
  </div>
</template>