import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en';
import de from './translations/de';

const resources = {
  en: {
    krq: en
  },
  de: {
    krq: de
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: process.env.REACT_APP_LANG ||'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false } // React already does escaping
  });

export default i18n;
