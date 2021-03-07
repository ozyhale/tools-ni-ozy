require('dotenv').config();
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tools',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.FBASE_APIKEY,
          authDomain: process.env.FBASE_AUTHDOMAIN,
          projectId: process.env.FBASE_PROJECTID,
          storageBucket: process.env.FBASE_STORAGEBUCKET,
          messagingSenderId: process.env.FBASE_MESSAGINGSENDERID,
          appId: process.env.FBASE_APPID,
          measurementId: process.env.FBASE_MEASUREMENTID
        },
        services: {
          auth: true, // Just as example. Can be any other service.
          firestore: true
        },
        lazy: false
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server:{
    port: 5001
  },

  loading: {
    color: 'white',
    height: '5px'
  }
}
