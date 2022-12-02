import type { ExportedGlobalComposer } from 'vue-i18n'
import type { NuxtI18nRoutingCustomProperties } from '/Users/khaledoghli/Documents/GitHub/ultimate Nuxt3/node_modules/@nuxtjs/i18n/dist/runtime/types'
import type { I18nRoutingCustomProperties } from '/Users/khaledoghli/Documents/GitHub/ultimate Nuxt3/node_modules/@nuxtjs/i18n/node_modules/vue-i18n-routing/dist/vue-i18n'

declare module '#app' {
  interface NuxtApp {
    $i18n: ExportedGlobalComposer & NuxtI18nRoutingCustomProperties & I18nRoutingCustomProperties
  }
}
declare module 'nuxt/dist/app/nuxt' {
  interface NuxtApp {
    $i18n: ExportedGlobalComposer & NuxtI18nRoutingCustomProperties & I18nRoutingCustomProperties
  }
}