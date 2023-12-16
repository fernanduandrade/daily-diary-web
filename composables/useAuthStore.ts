import { defineStore } from "pinia";
import type { BearerToken, User, UserLogged } from "../features/auth/types";
import { omit, isEmpty } from 'ramda'
import { useLocalStorage } from "@vueuse/core";

interface AuthState {
  user: UserLogged | null
  isLogged: boolean
}

export default defineStore('auth', {
  state: (): AuthState => ({ user: null, isLogged: false}),
  actions: {
    setUserLogged(user: User) {
      const userLogged: UserLogged = omit(['token'], user)
      this.user = userLogged
      this.isLogged = true
      const token:BearerToken = `Bearer ${user.token}`
      useLocalStorage('user', userLogged)
      sessionStorage.setItem('Token', token) 
    },
    logout() {
      this.$reset()
      sessionStorage.removeItem('Token')
      localStorage.removeItem('user')
    },
    getBearer() {
      return sessionStorage.getItem('Token')
    }
  },
  getters: {
    // TODO adicionar localStorage
  },

})