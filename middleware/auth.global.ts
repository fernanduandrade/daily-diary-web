export default defineNuxtRouteMiddleware((to, from) => {
  const { isLogged } = useAuthStore()

  if(isLogged && (to.path === '/login' || to.path === '/register')) {
    return navigateTo('/')
  }

  if(!isLogged && to.path !== '/login' && to.path !== '/register') {
    abortNavigation()
    return navigateTo('/login')
  }
})