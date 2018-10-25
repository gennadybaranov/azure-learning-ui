import englishLocale from './locales/en';
import russianLocale from './locales/ru';
import languageCodes from './languageCodes';

export const setLocale = languageCode => {
    localStorage.setItem('currentLocale', languageCode);
};

export const getLocale = () => {
    const currentLocale = localStorage.getItem('currentLocale');

    switch (currentLocale) {
        case languageCodes.RU:
            return russianLocale;
        case languageCodes.EN:
        default:
            return englishLocale;
    }
};
