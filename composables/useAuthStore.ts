import { defineStore } from "pinia";
import type { BearerToken, User, UserLogged } from "../features/auth/types";
import { omit } from 'ramda'

interface AuthState {
  isLogged: boolean,
  user: UserLogged | null
}

export default defineStore('auth', {
  state: (): AuthState => ({ isLogged: false, user: null }),
  actions: {
    setUserLogged(user: User) {
      this.isLogged = true
      const userLogged: UserLogged = omit(['token'], user)
      this.user = userLogged

      const token:BearerToken = `Bearer ${user.token}`
      sessionStorage.setItem('Token', token) 
    },
    logout() {
      this.$reset()
    },
    getBearer() {
      return sessionStorage.getItem('Token')
    }
  },
  getters: {}
})