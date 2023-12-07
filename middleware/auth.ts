import authStore from '~/features/auth/store/index'

const useAuth = authStore()

export default defineNuxtRouteMiddleware((to, from) => {
  const { isLogged } = useAuth

  if(isLogged && (to.path === '/login' || to.path === '/register')) { 
    return navigateTo('/')
  }

  if(!isLogged && to.path !== '/login' && to.path !== '/register') {
    return navigateTo('/login')
  } 

})