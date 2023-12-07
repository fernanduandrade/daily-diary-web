export default defineNuxtConfig({
  devtools: { enabled: true },
  app: { pageTransition: { name: 'page', mode: 'out-in' } },
  css: ['~/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css', 'vue-toast-notification/dist/theme-default.css'],
  modules: ['@pinia/nuxt'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
