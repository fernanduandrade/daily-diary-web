<script lang="ts" setup>
import VInput from '~/components/common/VInput.vue';

const value = ref('')
</script>

<template>
  <main class="flex items-center justify-center h-screen bg-indigo-800">
    <div class="flex p-4 justify-center shadow-md items-center flex-col gap-2 w-[35%] bg-slate-50 rounded">
      <h1 class="text-3xl">DIÁRIO</h1>
      <hr class="mt-2">
      <VInput v-model="value" type="email" placeholder="Email" />
      <VInput v-model="value" type="password" placeholder="Password" />
      <button>ACESSAR</button>
      <button>CRIAR CONTA</button>
    </div>
  </main>
</template>