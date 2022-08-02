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
            blog: 'Blog',
          },
          topbar: {
            english: 'English',
            spanish: 'Spanish',
            portuguese: 'Portuguese'
          },
          contact: {
            name: 'Name',
            email: 'Email',
            subject: 'Subject',
            messagePlaceholder: 'Write your message...',
            send: 'Send',
            message: {
              validation: 'Please, fill all fields with valid values.',
              error: 'There was an error sending the message. Please try again.',
              sent: 'Your message was successfuly sent. I will contact you shortly.',
              errormail: 'There was an error with you email address. Please check if it has a correct format.'
            },
            popUpIcon: {
              sent: 'Sent',
              verification: 'Verification',
              verified: 'Verified'
            },
            example: {
              name: 'Example: Name Surname',
              email: 'Example: namesurname@jourrapide.com'
            }
          },
          months: {
            january: 'January', february: 'February', march: 'March', april: 'April', may: 'May',
            june: 'June', july: 'July', august: 'August', september: 'September', october: 'October',
            november: 'November', december: 'December'
          },
          work: {
            present: 'Present'
          },
          popup: {
            accept: 'Accept'
          },
          pageerror: {
            message: 'There was an error loading the data, please try again.', 
            button: 'Refresh' 
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
            blog: 'Blog',
          },
          topbar: {
            english: 'Inglés',
            spanish: 'Español',
            portuguese: 'Portugués'
          },
          contact: {
            name: 'Nombre',
            email: 'Correo electrónico',
            subject: 'Asunto',
            messagePlaceholder: 'Escribí tu mensaje...',
            send: 'Enviar',
            message: {
              validation: 'Por favor, llene todos los campos con valores válidos.',
              error: 'Hubo un error al enviar el mensaje. Por favor inténtelo nuevamente.',
              sent: 'Tu mensaje se envío correctamente. En breve me voy a poner en contacto con vos.',
              errormail: 'Hubo un error con tu dirección de correo electrónico. Por favor comprobá que tenga un formato correcto.'
            },
            popUpIcon: {
              sent: 'Enviado',
              verification: 'Verificación',
              verified: 'Verificado'
            },
            example: {
              name: 'Ejemplo: Nombre Apellido',
              email: 'Ejemplo: nombreapellido@teleworm.com'
            }
          },
          months: {
            january: 'Enero', february: 'Febrero', march: 'Marzo', april: 'Abril', may: 'Mayo',
            june: 'Junio', july: 'Julio', august: 'Agosto', september: 'Septiembre', october: 'Octubre',
            november: 'Noviembre', december: 'Diciembre'
          },
          work: {
            present: 'Presente'
          },
          popup: {
            accept: 'Aceptar'
          },
          pageerror: {
            message: 'Hubo un error al cargar los datos, por favor intente nuevamente.',
            button: 'Recargar'
          }
        }
      },
      pt: {
        translation: {
          section: {
            aboutMe: 'Sobre mim',
            work: 'Trabalho',
            proyects: 'Projetos',
            contact: 'Contato',
            blog: 'Blogue',
          },
          topbar: {
            english: 'Inglês',
            spanish: 'Espanhol',
            portuguese: 'Português',
          },
          contact: {
            name: 'Nome',
            email: 'Correio eletrônico',
            subject: 'Assunto',
            messagePlaceholder: 'Escreva sua mensagem...',
            send: 'Mandar',
            message: {
              validation: 'Por favor, preencha todos os campos com valores válidos.',
              error: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.',
              sent: 'Sua mensagem foi enviada com sucesso. Entrarei em contato com você em breve.',
              errormail: 'Ocorreu um erro com seu endereço de e-mail. Verifique se está no formato correto.'
            },
            example: {
              name: 'Exemplo: Nome Sobrenome',
              email: 'Exemplo: nomesobrenome@dayrep.com'
            }
          },
          months: {
            january: 'Janeiro', february: 'Fevereiro', march: 'Março', april: 'Abril', may: 'Maio',
            june: 'Junho', july: 'Julho', august: 'Agosto', september: 'Setembro', october: 'Outubro',
            november: 'Novembro', december: 'Dezembro'
          },
          work: {
            present: 'Presente'
          },
          popup: {
            accept: 'Aceitar'
          },
          pageerror: {
            message: 'Ocorreu um erro ao carregar os dados, tente novamente.',
            button: 'Recarregar'
          }
        }
      }
    }
  });

export default i18n;