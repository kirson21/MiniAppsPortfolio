import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: "Web / Mini / Mobile Apps Development",
      subtitle: "Showcasing simple interactive examples of applications I can deliver for businesses.",
      leaveRequest: "Leave a Request",
      demo: "This is a demo app with mock data for testing purposes only.",
      close: "Close",
      
      // Portfolio Cards
      dineHub: {
        title: "DineHub",
        subtitle: "A food delivery mobile app, built on top of React Native. It is available and supports both Android and IOS platforms"
      },
      carento: {
        title: "Carento – Car Rental & Auto Dealer", 
        subtitle: "Professional and modern website for your car rental or auto dealership business"
      },
      maxton: {
        title: "Maxton Admin Panel",
        subtitle: "A powerful and user-friendly admin template based on sass"
      },
      
      // f01i.ai startup card
      f01iAi: {
        title: "f01i.ai - Your AI-Powered Shortcut to Financial Freedom",
        subtitle: "My big dream is to launch a startup that I developed. A project that gives the opportunity for everyone to be in the cryptocurrency investment and trading sphere. Each user can create a trading bot, using a natural dialogue with an AI agent. That is why I am ready to take your project into work below the market value in order to collect the starting capital. And if you are interested in investments, I will gladly demonstrate the project and send a pitch deck. For application development and investments, write to me in telegram or whatsapp 😊"
      }
    }
  },
  ru: {
    translation: {
      title: "Разработка веб / мобильных приложений",
      subtitle: "Простые примеры интерактивных приложений, которые я мог бы сделать для вашего бизнеса",
      leaveRequest: "Оставить Заявку",
      demo: "Это демо-приложение с тестовыми данными только для ознакомления.",
      close: "Закрыть",
      
      // Portfolio Cards
      dineHub: {
        title: "DineHub",
        subtitle: "Мобильное приложение доставки еды, построенное на React Native. Доступно и поддерживает платформы Android и IOS"
      },
      carento: {
        title: "Carento – Аренда Автомобилей и Автодилер",
        subtitle: "Профессиональное приложение для вашего бизнеса по аренде автомобилей или автосалона"
      },
      maxton: {
        title: "Административная Панель Maxton",
        subtitle: "Мощный и удобный административный шаблон на основе sass"
      },
      
      // f01i.ai startup card
      f01iAi: {
        title: "f01i.ai - ИИ чат-конструткор для создания торговых ботов. Маркетплейс с умной системой рейтинга.",
        subtitle: "Моя большая мечта - запустить стартап, который я разработал. Проект, дающий возможность каждому быть в сфере криптовалютных инвестиций и торговли. Каждый пользователь может создать торгового бота, используя естественный диалог с ИИ-агентом. Поэтому я готов взять ваш проект в работу ниже рыночной стоимости, чтобы собрать стартовый капитал для своего стартапа. А если вас интересуют инвестиции, с радостью продемонстрирую проект и отправлю питч-дек. По разработке приложений и инвестициям пишите мне в телеграм или ватсап 😊"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
