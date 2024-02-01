// For Nuxt 3
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart, faShareSquare } from '@fortawesome/free-regular-svg-icons'
config.autoAddCss = false
library.add(fas)
library.add(faComment)
library.add(faHeart)
library.add(faShareSquare)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})