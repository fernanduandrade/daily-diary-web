export interface User {
  id: string
  name: string
  email: string
  token: string
}

export type UserLogged = Omit<User, 'token'> 

export type BearerToken = `Bearer ${string}`
