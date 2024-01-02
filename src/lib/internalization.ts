import {
    FooterAddContent,
    FooterLinks,
    NavBarContent,
} from "@/components/constants/content";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "en",
        returnObjects: true,
        resources: {
            en: {
                translation: {
                    greeting: "Hello world",
                    footerLinks: FooterLinks.en,
                    footerAddContent: FooterAddContent.en,
                    navBarContent: NavBarContent.en,
                },
            },
            hi: {
                translation: {
                    greeting: "হ্যালো শব্দ",
                    footerLinks: FooterLinks.hi,
                    navBarContent: NavBarContent.hi,
                },
            },
        },
    });
