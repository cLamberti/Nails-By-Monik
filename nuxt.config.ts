export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/i18n'],

  i18n: {
    locales: [
      { code: 'es', name: 'Español', file: 'es.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ],
    defaultLocale: 'es',
    langDir: 'i18n/',
    strategy: 'prefix_except_default'
  },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@/assets/css/main.css'
  ],

  app: {
    head: {
      title: "Nail's by Monik",
      meta: [
        { name: 'description', content: 'Servicios de manicure y pedicure en Bijagua, Costa Rica' }
      ],
      link: [
        { rel: 'icon', href: '/img/favicon-16x16.png' },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css'
        }
      ]
    }
  }
})