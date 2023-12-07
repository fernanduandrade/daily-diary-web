import { defineStore } from "pinia";
import type { User } from "../types";


interface AuthState {
  isLogged: boolean,
  user: User | null
}

export default defineStore('auth', {
  state: (): AuthState => ({ isLogged: false, user: null }),
  actions: {
    setUserLogged(user: User) {
      this.isLogged = true
      this.user = user
    },
    logout() {
      this.$reset()
    },
    getBearer() {
      return this.user?.token
    }
  },
  getters: {}
})