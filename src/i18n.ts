import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import de from './translations/en';

const resources = {
  en: {
    krq: de
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false } // React already does escaping
  });

export default i18n;
