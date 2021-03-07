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
          apiKey: "AIzaSyAyospSiuv6c4JUhUk5X_2ruz8tqFnCUKE",
          authDomain: "tools-ni-ozy.firebaseapp.com",
          projectId: "tools-ni-ozy",
          storageBucket: "tools-ni-ozy.appspot.com",
          messagingSenderId: "102100480046",
          appId: "1:102100480046:web:66b79679548192b47eefbf",
          measurementId: "G-912JSMBWGF"
        },
        services: {
          auth: true // Just as example. Can be any other service.
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
