import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import es from './es.json';
import en from './en.json';

const instance = i18n;
// Set the key-value pairs for the different languages you want to support.
instance.translations = {
  en: en,
  es: es,
};
// Set the locale once at the beginning of your app.
instance.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
instance.fallbacks = true;

export default instance;