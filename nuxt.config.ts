// https://nuxt.com/docs/api/configuration/nuxt-config
import gsap from 'gsap';
export default defineNuxtConfig({
  plugins: ['~/plugins/i18n'],
  modules: ['@nuxtjs/tailwindcss','nuxt-purgecss','@nuxtjs/color-mode','@nuxtjs/fontaine','@nuxtjs/i18n','nuxt-icons','@nuxt/image-edge'],
  css: [
    '~/assets/css/_fonts.scss',
    '~/assets/css/_main.scss',
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        dir:'ltr',
        file: 'en.json'
      },
      {
        code: 'ar',
        name: 'عربي',
        dir:'rtl',
        file: 'ar.json'
      }
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    skipSettingLocaleOnNavigate: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    },
    strategy: 'prefix_except_default',
  },
  // i18n: {
  //   vueI18n: i18n,
  //   vueI18n: {
  //       vueI18nLoader: true,
  //       defaultLocale: 'en',
  //       locales: [
  //         {
  //           code: 'en',
  //           name: 'English'
  //         },
  //         {
  //           code: 'ar',
  //           name: 'Arabic'
  //         }
  //       ],
  //       legacy: false,
  //       locale: 'en',
  //     }
  // },

  // fontMetrics: {
  //   fonts: [
  //     {
  //       family: 'Dubai W23',
  //       fallbacks: ['Roboto'],
  //       overrideName: 'fallback-a',
  //     }
  //   ]
  // },
  app: {
    // Add global page transition
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
      // css: false,

      onBeforeEnter(el) {
        console.log('one befooooore');
        gsap.set(el, {
          opacity: 0
        })
      },

      onEnter(el, done) {
        gsap.to(el, {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete: done
        })
      },

      onLeave(el, done) {
        gsap.to(el, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete: done
        })
      }
    },
    // head: {
    //   meta: [
    //     { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    //   ],
    //   // title: "My Lab App" || "",
    //   htmlAttrs: {
    //     lang: '',
    //   },
    // },
  },
  colorMode: {
    classSuffix: ''
  },
  tailwindcss: {
    exposeConfig:false,
    injectPosition:0,
    viewer:true
  },
})
