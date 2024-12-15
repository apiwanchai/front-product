export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Product',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  ssr:false,
 
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap/dist/css/bootstrap.css'
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios.js'} 
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],
  build: {
    transpile: ['bootstrap-vue']
  },
  axios: {
    baseURL: 'http://localhost:5000'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
