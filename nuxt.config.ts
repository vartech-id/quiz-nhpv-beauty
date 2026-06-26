// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/eslint'],
  imports: {
    presets: [
      {
        from: 'gsap',
        imports: ['gsap']
      }
    ]
  },
  css: ["./app/assets/css/main.css"],
   vite: {
    plugins: [tailwindcss()],
  },
})