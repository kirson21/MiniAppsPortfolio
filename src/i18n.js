import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: "Mini Apps Developer | Kirson's Portfolio",
      subtitle: "Showcasing interactive applications we can deliver for clients",
      leaveRequest: "Leave a Request",
      demo: "This is a demo app with mock data for testing purposes only.",
      close: "Close",
      
      // Portfolio Cards
      danceStudio: {
        title: "Dance Studio App",
        subtitle: "Class schedules & client booking"
      },
      carRental: {
        title: "Car Rental App", 
        subtitle: "Browse cars, rental options, booking"
      },
      merchStore: {
        title: "Merch Store App",
        subtitle: "Product catalog, add-to-cart"
      },
      concertTickets: {
        title: "Concert Tickets App",
        subtitle: "Events list, select/buy ticket"
      },
      calorieCounter: {
        title: "Calorie Counter App",
        subtitle: "Track meals, daily summary"
      },
      resumeAnalyzer: {
        title: "Resume Analyzer App",
        subtitle: "AI-powered resume analysis & scoring"
      }
    }
  },
  ru: {
    translation: {
      title: "Разработчик Мини-Приложений | Портфолио Кирсона",
      subtitle: "Демонстрация интерактивных приложений для клиентов",
      leaveRequest: "Оставить Заявку",
      demo: "Это демо-приложение с тестовыми данными только для ознакомления.",
      close: "Закрыть",
      
      // Portfolio Cards
      danceStudio: {
        title: "Приложение Танцевальной Студии",
        subtitle: "Расписание занятий и бронирование"
      },
      carRental: {
        title: "Приложение Аренды Автомобилей",
        subtitle: "Обзор машин, опции аренды, бронирование"
      },
      merchStore: {
        title: "Приложение Магазина Товаров",
        subtitle: "Каталог товаров, добавление в корзину"
      },
      concertTickets: {
        title: "Приложение Билетов на Концерты",
        subtitle: "Список событий, выбор/покупка билетов"
      },
      calorieCounter: {
        title: "Приложение Подсчета Калорий",
        subtitle: "Отслеживание питания, дневная сводка"
      },
      resumeAnalyzer: {
        title: "Анализатор Резюме",
        subtitle: "ИИ анализ и оценка резюме"
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