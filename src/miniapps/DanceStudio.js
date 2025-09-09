import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const DanceStudio = () => {
  const { i18n } = useTranslation();
  const [selectedClass, setSelectedClass] = useState(null);
  const [activeTab, setActiveTab] = useState('schedule');

  const isRussian = i18n.language === 'ru';

  const classes = [
    {
      id: 1,
      name: isRussian ? 'Балет для начинающих' : 'Ballet Basics',
      instructor: isRussian ? 'Анна Петрова' : 'Anna Petrova',
      time: '10:00 - 11:30',
      day: isRussian ? 'Понедельник' : 'Monday',
      level: isRussian ? 'Начинающий' : 'Beginner',
      price: '$25',
      spots: 8
    },
    {
      id: 2,
      name: isRussian ? 'Современные танцы' : 'Contemporary Dance',
      instructor: isRussian ? 'Мария Иванова' : 'Maria Ivanova',
      time: '14:00 - 15:30',
      day: isRussian ? 'Среда' : 'Wednesday',
      level: isRussian ? 'Средний' : 'Intermediate',
      price: '$30',
      spots: 5
    },
    {
      id: 3,
      name: isRussian ? 'Хип-хоп' : 'Hip-Hop Basics',
      instructor: isRussian ? 'Дмитрий Козлов' : 'Dmitry Kozlov',
      time: '18:00 - 19:30',
      day: isRussian ? 'Пятница' : 'Friday',
      level: isRussian ? 'Начинающий' : 'Beginner',
      price: '$28',
      spots: 12
    },
    {
      id: 4,
      name: isRussian ? 'Латинские танцы' : 'Latin Dance',
      instructor: isRussian ? 'София Романова' : 'Sofia Romanova',
      time: '19:00 - 20:30',
      day: isRussian ? 'Вторник' : 'Tuesday',
      level: isRussian ? 'Продвинутый' : 'Advanced',
      price: '$35',
      spots: 3
    }
  ];

  const bookClass = (classItem) => {
    setSelectedClass(classItem);
  };

  return (
    <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50 overflow-auto custom-scrollbar">
      <div className="p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {isRussian ? '🩰 Танцевальная Студия "Грация"' : '🩰 Grace Dance Studio'}
          </h1>
          <p className="text-gray-600">
            {isRussian ? 'Профессиональные уроки танцев для всех уровней' : 'Professional dance classes for all levels'}
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('schedule')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'schedule'
                  ? 'bg-purple-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-purple-500'
              }`}
            >
              {isRussian ? 'Расписание' : 'Schedule'}
            </button>
            <button
              onClick={() => setActiveTab('instructors')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'instructors'
                  ? 'bg-purple-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-purple-500'
              }`}
            >
              {isRussian ? 'Инструкторы' : 'Instructors'}
            </button>
          </div>
        </div>

        {/* Schedule Tab */}
        {activeTab === 'schedule' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              {classes.map((classItem) => (
                <motion.div
                  key={classItem.id}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">
                        {classItem.name}
                      </h3>
                      <p className="text-purple-600 font-medium">{classItem.instructor}</p>
                    </div>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      {classItem.level}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <span className="w-4 h-4 mr-2">📅</span>
                      <span>{classItem.day} • {classItem.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="w-4 h-4 mr-2">💰</span>
                      <span>{classItem.price} {isRussian ? 'за занятие' : 'per class'}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="w-4 h-4 mr-2">👥</span>
                      <span>{classItem.spots} {isRussian ? 'свободных мест' : 'spots available'}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => bookClass(classItem)}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  >
                    {isRussian ? 'Забронировать' : 'Book Class'}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Instructors Tab */}
        {activeTab === 'instructors' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 md:grid-cols-2"
          >
            {[
              {
                name: isRussian ? 'Анна Петрова' : 'Anna Petrova',
                specialty: isRussian ? 'Балет, Классические танцы' : 'Ballet, Classical Dance',
                experience: isRussian ? '12 лет опыта' : '12 years experience',
                description: isRussian 
                  ? 'Мастер балета с международным опытом. Работала в Большом театре.' 
                  : 'Master of ballet with international experience. Former Bolshoi Theatre dancer.'
              },
              {
                name: isRussian ? 'Мария Иванова' : 'Maria Ivanova',
                specialty: isRussian ? 'Современные танцы' : 'Contemporary Dance',
                experience: isRussian ? '8 лет опыта' : '8 years experience',
                description: isRussian 
                  ? 'Чемпионка России по современным танцам. Преподает авторскую методику.' 
                  : 'Russian champion in contemporary dance. Teaches original methodology.'
              }
            ].map((instructor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {instructor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                  {instructor.name}
                </h3>
                <p className="text-purple-600 text-center font-medium mb-1">
                  {instructor.specialty}
                </p>
                <p className="text-gray-500 text-center text-sm mb-3">
                  {instructor.experience}
                </p>
                <p className="text-gray-600 text-center">
                  {instructor.description}
                </p>
              </div>
            ))}
          </motion.div>
        )}

        {/* Booking Modal */}
        {selectedClass && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedClass(null)}
          >
            <motion.div
              className="bg-white rounded-xl p-6 max-w-md w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold mb-4">
                {isRussian ? 'Бронирование занятия' : 'Book Class'}
              </h3>
              <div className="mb-4">
                <p className="font-medium text-gray-800">{selectedClass.name}</p>
                <p className="text-gray-600">{selectedClass.day} • {selectedClass.time}</p>
                <p className="text-purple-600 font-medium">{selectedClass.price}</p>
              </div>
              <div className="space-y-3 mb-6">
                <input
                  type="text"
                  placeholder={isRussian ? 'Ваше имя' : 'Your name'}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder={isRussian ? 'Email' : 'Email'}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder={isRussian ? 'Телефон' : 'Phone'}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setSelectedClass(null)}
                  className="flex-1 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  {isRussian ? 'Отмена' : 'Cancel'}
                </button>
                <button
                  onClick={() => {
                    alert(isRussian ? 'Бронирование подтверждено!' : 'Booking confirmed!');
                    setSelectedClass(null);
                  }}
                  className="flex-1 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600"
                >
                  {isRussian ? 'Подтвердить' : 'Confirm'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DanceStudio;