export type Diary = {
  id: string
  isPublic: boolean
  mood: string
  text: string
  title: string
  createdAt: Date
  likesCount?: number
  isFavorited?: boolean
  user?: User
}

export type User = {
  id: string
  name: string
  email: string
}