import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import TRANSLATION_EN from './translations/en';
import TRANSLATION_ES from './translations/es';
import TRANSLATION_FR from './translations/fr';
import TRANSLATION_JA from './translations/ja';
import TRANSLATION_NL from './translations/nl';
import TRANSLATION_RU from './translations/ru';
import TRANSLATION_ZH from './translations/zh';

i18n.use(LanguageDetector).init({
  detection: {
    // order and from where user language should be detected
    order: [
      'querystring',
      'cookie',
      'localStorage',
      'sessionStorage',
      'navigator',
      'htmlTag',
      'path',
      'subdomain'
    ],

    // keys or params to lookup language from
    lookupQuerystring: 'lang',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupSessionStorage: 'i18nextLng',
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,

    // cache user language on
    caches: ['localStorage', 'cookie'],
    excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

    // optional expire and domain for set cookie
    cookieMinutes: 10,
    cookieDomain: 'myDomain',

    // optional htmlTag with lang attribute, the default is:
    htmlTag: document.documentElement,

    // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
    cookieOptions: { path: '/', sameSite: 'strict' }
  },
  fallbackLng: 'en',
  resources: {
    en: {
      translation: TRANSLATION_EN
    },
    es: {
      translation: TRANSLATION_ES
    },
    fr: {
      translation: TRANSLATION_FR
    },
    ja: {
      translation: TRANSLATION_JA
    },
    nl: {
      translation: TRANSLATION_NL
    },
    ru: {
      translation: TRANSLATION_RU
    },
    zh: {
      translation: TRANSLATION_ZH
    }
  }
});

const localize = i18n.t.bind(i18n);
const Localization = Object.keys(TRANSLATION_EN).reduce(
  (a, key) => ({
    ...a,
    [key]: key
  }),
  {}
);

export { localize, Localization };
