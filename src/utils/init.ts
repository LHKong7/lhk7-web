import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import en from '../constants/en.js';
import zh from '../constants/zh.js';

export const initLang = () => {
    i18n.use(initReactI18next).init({
        lng: 'en',
        fallbackLng: 'en',
        resources: {
            en: { translation: en },
            zhCN: { translation: zh },
        },
    });
}
