export default {
  /*
   ** Disable Server Side rendering
   ** See https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-ssr
   */
  ssr: true,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: (titleChunk) =>
      titleChunk ? `Morteza Sabihi - ${titleChunk}` : 'Morteza Sabihi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'Morteza Sabihi, مرتضی صبیحی' },
      { name: 'author', content: 'Morteza Sabihi' },
      {
        name: 'google-site-verification',
        content: process.env.GOOGLE_SITE_VERIFICATION,
      },
      {
        name: 'twitter:image',
        content: 'https://mortezasabihi.com/avatar.png',
      },
    ],
    link: [
      // { rel: 'icon', type: 'image/png', href: '/favicon/favicon-16x16.png' },
      // { rel: 'icon', type: 'image/png', href: '/favicon/favicon-32x32.png' },
      // { rel: 'icon', type: 'image/png', href: '/favicon/favicon-96x96.png' },
      // {
      //   rel: 'apple-touch-icon',
      //   type: 'image/png',
      //   href: '/favicon/favicon-76x76.png',
      // },
      // {
      //   rel: 'apple-touch-icon',
      //   type: 'image/png',
      //   href: '/favicon/favicon-120x120.png',
      // },
      // {
      //   rel: 'apple-touch-icon',
      //   type: 'image/png',
      //   href: '/favicon/favicon-152x152.png',
      // },
      // {
      //   rel: 'apple-touch-icon',
      //   type: 'image/png',
      //   href: '/favicon/favicon-167x167.png',
      // },
      // {
      //   rel: 'apple-touch-icon',
      //   type: 'image/png',
      //   href: '/favicon/favicon-180x180.png',
      // },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;700&display=swap',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['animate.css/animate.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/vee-validate'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: [
    { path: '~/components/layout/', prefix: 'layout' },
    { path: '~/components/pages/', prefix: 'page' },
    { path: '~/components/ui/', prefix: 'ui' },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://pwa.nuxtjs.org
    '@nuxtjs/pwa',
    // Doc: https://google-analytics.nuxtjs.org
    '@nuxtjs/google-analytics',
  ],
  /*
   ** PWA
   */
  pwa: {
    meta: {
      name: undefined,
      description: undefined,
      theme_color: '#4f46e5',
      ogImage: {
        path: 'https://mortezasabihi.com/avatar.png',
        type: 'image/png',
      },
      twitterCard: 'summary',
      twitterSite: '@mortezasabihi',
      twitterCreator: '@mortezasabihi',
    },
    manifest: {
      name: "Morteza Sabihi's personal website",
      short_name: 'Morteza Sabihi',
      description: "Morteza Sabihi's personal website",
      dir: 'ltr',
    },
  },
  /*
   ** Google Analytics
   */
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS,
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/vaso2/nuxt-fontawesome
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: [
              'faTelegramPlane',
              'faInstagram',
              'faTwitter',
              'faLinkedinIn',
              'faGithub',
            ],
          },
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['faUniversity', 'faSpinner', 'faEnvelope'],
          },
          // {
          //   set: '@fortawesome/free-regular-svg-icons',
          //   icons: ['far'],
          // },
        ],
      },
    ],
    // Doc: https://www.npmjs.com/package/@nuxtjs/sitemap
    '@nuxtjs/sitemap',
    // Doc https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** sitemap module configuration
   ** See https://www.npmjs.com/package/@nuxtjs/sitemap#configuration
   */
  sitemap: {
    hostname: 'https://mortezasabihi.com',
    routes: [
      {
        url: '/',
        changefreq: 'monthly',
        priority: 1,
      },
      {
        url: '/resume',
        changefreq: 'monthly',
        priority: 0.8,
      },
      {
        url: '/contact',
        changefreq: 'monthly',
        priority: 0.8,
      },
    ],
  },
  /*
   ** robots module configuration
   ** See https://github.com/nuxt-community/robots-module#options
   */
  robots: {
    Sitemap: 'https://mortezasabihi.com/sitemap.xml',
    UserAgent: '*',
    Disallow: '',
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: ['vee-validate/dist/rules'],
    extractCSS: true,
  },
}
