import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import en from '../constants/en.js';
import zh from '../constants/zh.js';

export const initLang = () => {
    i18n.use(initReactI18next).init({
        lng: 'cn',
        fallbackLng: 'cn',
        resources: {
            en: { translation: en },
            cn: { translation: zh },
        },
    });
}
