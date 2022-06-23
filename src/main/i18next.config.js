import path from 'path'
import i18n from 'i18next'
import i18nextBackend from 'i18next-fs-backend'
import { LANGUAGES, FALLBACK_LANGUAGE, DEFAULT_NAMESPACE, NAMESPACES } from './config'

const i18nextOptions = {
  backend: {
    // path where resources get loaded from
    loadPath: path.join(__dirname, '../locales/{{lng}}/{{ns}}.json'),
    // path to post missing resources
    addPath: path.join(__dirname, '../locales/{{lng}}/{{ns}}.missing.json')
  },
  initImmediate: false,
  interpolation: {
    escapeValue: false
  },
  saveMissing: true,
  fallbackLng: FALLBACK_LANGUAGE,
  preload: LANGUAGES,
  ns: NAMESPACES,
  defaultNS: DEFAULT_NAMESPACE,
  react: {
    wait: false
  }
}

i18n.use(i18nextBackend)

if (!i18n.isInitialized) {
  i18n
    .init(i18nextOptions)
}

export default i18n
