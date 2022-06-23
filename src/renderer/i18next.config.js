import i18next from 'i18next'
import { LANGUAGES, FALLBACK_LANGUAGE } from './config'
// Locales
import en from '../locales/en/rendered.json'
import es from '../locales/es/rendered.json'
import zh from '../locales/zh/rendered.json'

export const i18nextOptions = {
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
export default i18n
