import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translate/locales/english.json'; // Adjust path as needed
import es from './translate/locales/spanish.json'; // Adjust path as needed
import "intl-pluralrules";
import { getLocales } from "expo-localization";

i18n
    .use(initReactI18next) // Bind i18n to react-i18next
    .init({
        resources: {
            en: { translation: en },
            es: { translation: es },
            // Add other languages here
        },
        lng: getLocales()[0]?.languageCode == "en" ? "en" : "es", // Default language
        fallbackLng: 'en', // Fallback language if translation is missing
        interpolation: {
            escapeValue: false, // React already safe from XSS
        },
        missingKeyHandler: (lng, ns, key, fallbackValue) => {
            // Custom logic when a key is missing
            console.warn(`Missing translation: ${key}`);
        },
        // Optional: configure how missing keys should be handled
        returnNull: false, // Return null instead of missing key (default: true)
        returnEmptyString: false, // Return empty string instead of missing key (default: false)
    });

export default i18n;
