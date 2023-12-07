<script lang="ts" setup>

type ButtonType = 'button' | 'submit'

type ButtonProps = {
  transperant: boolean,
  primary?: boolean,
  type: ButtonType
}

withDefaults(defineProps<ButtonProps>(), {
  transperant: false,
  primary: true,
  type: 'button'
})
</script>
vscode-file://vscode-app/usr/share/code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html
<template>
  <button
    :type="type"
    :class="[primary
      ? 'text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300  mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
      : 'text-gray-900  bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700']"
    class="font-semibold rounded-md text-md px-5 py-2.5 me-2 w-full">
    <slot></slot>
  </button>
</template>