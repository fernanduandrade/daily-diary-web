<script lang="ts" setup>

defineEmits(['update:modelValue'])

type InputType = 'text' | 'password' | 'email'

type InputProps = {
  type: InputType
  modelValue: string | number
  label?: string
  floatLabel: boolean
  placeholder: string
}

withDefaults(defineProps<InputProps>(), {
  floatLabel: false,
  type: 'text',
  placeholder: '',
  modelValue: ''
})

</script>

<template>
  <div class="relative border rounded w-full">
    <input
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      id="floating_outlined"
      class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
    <label v-if="floatLabel" for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
      {{ label }}
    </label>
  </div>
</template>