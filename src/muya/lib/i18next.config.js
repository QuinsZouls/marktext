import i18next from 'i18next'
// Locales
import en from '../../locales/en/muya.json'
import es from '../../locales/es/muya.json'
import zh from '../../locales/zh/muya.json'

const LANGUAGES = ['en', 'es', 'zh']
const FALLBACK_LANGUAGE = 'en'

const i18nextOptions = {
  interpolation: {
    escapeValue: false
  },
  fallbackLng: FALLBACK_LANGUAGE,
  preload: LANGUAGES,
  resources: {
    en: {
      translation: en
    },
    es: {
      translation: es
    },
    zh: {
      translation: zh
    }
  }
}
const i18n = i18next.createInstance()
if (!i18n.isInitialized) {
  i18n.init(i18nextOptions)
}
export default i18n
