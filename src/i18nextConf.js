import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const fallbackLng = ['en'];
const availableLanguages = ['en', 'es'];

i18n
  .use(Backend) // load translations using http (default                                               public/assets/locals/en/translations)
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    fallbackLng, // fallback language is english.

    detection: {
      checkWhitelist: true, // options for language detection
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false, // no need for react. it escapes by default
    },

    resources: {
      en: {
        translation: {
          section: {
            aboutMe: 'About me',
            work: 'Work',
            proyects: 'Proyects',
            contact: 'Contact',
          },
          topbar: {
            english: 'English',
            spanish: 'Spanish'
          },
          contact: {
            name: 'Name',
            email: 'Email',
            messagePlaceholder: 'Write your message...',
            send: 'Send'
          },
          months: {
            january: 'January', february: 'February', march: 'March', april: 'April', may: 'May',
            june: 'June', july: 'July', august: 'August', september: 'September', october: 'October',
            november: 'November', december: 'December'
          },
          work: {
            present: 'Present'
          }
        }
      },
      es: {
        translation: {
          section: {
            aboutMe: 'Sobre mí',
            work: 'Trabajo',
            proyects: 'Proyectos',
            contact: 'Contacto',
          },
          topbar: {
            english: 'Inglés',
            spanish: 'Español'
          },
          contact: {
            name: 'Nombre',
            email: 'Correo electrónico',
            messagePlaceholder: 'Escribí tu mensaje...',
            send: 'Enviar'
          },
          months: {
            january: 'Enero', february: 'Febrero', march: 'Marzo', april: 'Abril', may: 'Mayo',
            june: 'Junio', july: 'Julio', august: 'Agosto', september: 'Septiembre', october: 'Octubre',
            november: 'Noviembre', december: 'Diciembre'
          },
          work: {
            present: 'Presente'
          } 
        }
      }
    }
  });

export default i18n;