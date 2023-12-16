export default defineNuxtRouteMiddleware((to, from) => {
  const { isLogged } = useAuthStore()
  console.log(isLogged)
  if(isLogged && (to.path === '/login' || to.path === '/register')) {
    return navigateTo('/')
  }

  if(!isLogged && to.path !== '/login' && to.path !== '/register') {
    return navigateTo('/login')
  }
})