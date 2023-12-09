<script lang="ts" setup>
import type { UserLogged } from '~/features/auth/types';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const authStore = useAuthStore()
const userLogged = ref<UserLogged>()

onMounted(() => {
  const { user } = authStore
  userLogged.value = user!
})


const logout = () => {
  sessionStorage.clear()
  authStore.logout()
  navigateTo('/login')
}
</script>

<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900 shadow-md">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <h1 class="self-center text-5xl font-ephesis font-semibold whitespace-nowrap dark:text-white">
          <NuxtLink :to="'/'">
            Diary <font-awesome-icon icon="fa-solid fa-feather-pointed" />
          </NuxtLink>
        </h1>
      </a>
      <div class="flex md:order-1">
        <div class="relative hidden md:block">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="hover:cursor-pointer" color="#161617" />
            <span class="sr-only">Search icon</span>
          </div>
          <input type="text" id="search-navbar"
            class="block w-full p-2 ps-10 text-sm text-gray-900 border focus:w-[450px] transition-all ease-in border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for stories">
        </div>
        <button data-collapse-toggle="navbar-search" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-search" aria-expanded="false">
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border-none border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li class="self-center font-semibold">
            <a href="#"
              class="py-2 px-3 font-medium text-gray-950 hover:text-blue-600 rounded md:bg-transparent md:text-gray-800-700 md:p-0"
              aria-current="page">
              <NuxtLink :to="'/diaries/create'">Write a diary</NuxtLink>
            </a>
          </li>
          <li>
            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton
                  class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  <a href="#"
                    class="py-2 px-3 font-medium text-gray-950 hover:text-blue-600 rounded md:bg-transparent md:text-gray-800-700 md:p-0"
                    aria-current="page">
                    <font-awesome-icon icon="fa-solid fa-user" />
                    {{ userLogged?.name }}
                  </a>
                </MenuButton>
              </div>

              <transition enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95">
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                    <a href="#"
                      :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">
                      <font-awesome-icon icon="fa-solid fa-gear" />
                      Account
                      settings</a>
                    </MenuItem>
                    <form @submit.prevent="logout">
                      <MenuItem v-slot="{ active }">
                      <button type="submit"
                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block w-full px-4 py-2 text-left text-sm']">
                        <font-awesome-icon icon="fa-solid fa-right-from-bracket"/> Logout
                        out</button>
                      </MenuItem>
                    </form>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </li>
        </ul>

      </div>
    </div>
  </nav>
</template>