// import { defaultDirection } from 
export default defineNuxtPlugin(nuxtApp => {

  // onBeforeLanguageSwitch called right before setting a new locale
  nuxtApp.$i18n.onBeforeLanguageSwitch = (oldLocale, newLocale, isInitialSetup, nuxtApp) => {
    console.log('onBeforeLanguageSwitch', oldLocale, newLocale, isInitialSetup);
    document.querySelector('html').setAttribute('dir',nuxtApp.$i18n.localeProperties.value.dir);
  }
  // onLanguageSwitched called right after a new locale has been set
  nuxtApp.$i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    console.log('onLanguageSwitched', oldLocale, newLocale)
  }
})