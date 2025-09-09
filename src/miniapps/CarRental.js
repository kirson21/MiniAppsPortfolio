import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CarRental = () => {
  const { i18n } = useTranslation();
  const [selectedCar, setSelectedCar] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showBookingForm, setShowBookingForm] = useState(false);

  const isRussian = i18n.language === 'ru';

  const cars = [
    {
      id: 1,
      name: 'Toyota Camry',
      type: isRussian ? 'Седан' : 'Sedan',
      category: 'economy',
      price: '$45',
      rating: 4.8,
      features: isRussian 
        ? ['Автомат', 'Кондиционер', 'GPS', 'Bluetooth'] 
        : ['Automatic', 'A/C', 'GPS', 'Bluetooth'],
      fuel: isRussian ? 'Бензин' : 'Gasoline',
      seats: 5,
      image: '🚗'
    },
    {
      id: 2,
      name: 'BMW X5',
      type: isRussian ? 'Внедорожник' : 'SUV',
      category: 'luxury',
      price: '$95',
      rating: 4.9,
      features: isRussian 
        ? ['Автомат', 'Кожа', 'Панорама', 'Премиум аудио'] 
        : ['Automatic', 'Leather', 'Panorama', 'Premium Audio'],
      fuel: isRussian ? 'Бензин' : 'Gasoline',
      seats: 7,
      image: '🚙'
    },
    {
      id: 3,
      name: 'Tesla Model 3',
      type: isRussian ? 'Электромобиль' : 'Electric',
      category: 'electric',
      price: '$75',
      rating: 4.7,
      features: isRussian 
        ? ['Автопилот', 'Быстрая зарядка', 'Премиум интерьер'] 
        : ['Autopilot', 'Supercharging', 'Premium Interior'],
      fuel: isRussian ? 'Электричество' : 'Electric',
      seats: 5,
      image: '⚡'
    },
    {
      id: 4,
      name: 'Ford Mustang',
      type: isRussian ? 'Спорткар' : 'Sports Car',
      category: 'sports',
      price: '$85',
      rating: 4.6,
      features: isRussian 
        ? ['Механическая КПП', 'Спорт-подвеска', 'V8 двигатель'] 
        : ['Manual Trans', 'Sport Suspension', 'V8 Engine'],
      fuel: isRussian ? 'Бензин' : 'Gasoline',
      seats: 4,
      image: '🏎️'
    }
  ];

  const filters = [
    { id: 'all', label: isRussian ? 'Все' : 'All' },
    { id: 'economy', label: isRussian ? 'Эконом' : 'Economy' },
    { id: 'luxury', label: isRussian ? 'Люкс' : 'Luxury' },
    { id: 'electric', label: isRussian ? 'Электро' : 'Electric' },
    { id: 'sports', label: isRussian ? 'Спорт' : 'Sports' }
  ];

  const filteredCars = activeFilter === 'all' 
    ? cars 
    : cars.filter(car => car.category === activeFilter);

  const handleBookCar = (car) => {
    setSelectedCar(car);
    setShowBookingForm(true);
  };

  return (
    <div className="h-full bg-gradient-to-br from-blue-50 to-cyan-50 overflow-auto custom-scrollbar">
      <div className="p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {isRussian ? '🚗 Автопрокат "Драйв"' : '🚗 Drive Car Rental'}
          </h1>
          <p className="text-gray-600">
            {isRussian ? 'Качественные автомобили для любых поездок' : 'Quality vehicles for every journey'}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 shadow-md'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredCars.map((car) => (
            <motion.div
              key={car.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              layout
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{car.image}</div>
                  <div className="text-right">
                    <div className="flex items-center text-yellow-500">
                      <span className="text-sm mr-1">⭐</span>
                      <span className="font-medium">{car.rating}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {car.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{car.type}</p>

                <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <span className="mr-2">👥</span>
                    <span>{car.seats} {isRussian ? 'мест' : 'seats'}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">⛽</span>
                    <span>{car.fuel}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">
                    {isRussian ? 'Особенности:' : 'Features:'}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {car.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-800">{car.price}</span>
                    <span className="text-gray-600 ml-1">
                      {isRussian ? '/день' : '/day'}
                    </span>
                  </div>
                  <button
                    onClick={() => handleBookCar(car)}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                  >
                    {isRussian ? 'Забронировать' : 'Book Now'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Booking Form Modal */}
        {showBookingForm && selectedCar && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setShowBookingForm(false)}
          >
            <motion.div
              className="bg-white rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold mb-4">
                {isRussian ? 'Бронирование автомобиля' : 'Car Booking'}
              </h3>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{selectedCar.image}</span>
                  <div>
                    <p className="font-medium">{selectedCar.name}</p>
                    <p className="text-blue-600 text-sm">{selectedCar.type}</p>
                    <p className="text-lg font-bold">{selectedCar.price} {isRussian ? '/день' : '/day'}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="date"
                    className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    defaultValue="2024-01-15"
                  />
                  <input
                    type="date"
                    className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    defaultValue="2024-01-18"
                  />
                </div>
                <input
                  type="text"
                  placeholder={isRussian ? 'Полное имя' : 'Full Name'}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  placeholder={isRussian ? 'Телефон' : 'Phone'}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder={isRussian ? 'Водительские права' : 'Driver License'}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center">
                  <span>{isRussian ? 'Итого (3 дня):' : 'Total (3 days):'}</span>
                  <span className="text-xl font-bold text-blue-600">
                    ${parseInt(selectedCar.price.replace('$', '')) * 3}
                  </span>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => setShowBookingForm(false)}
                  className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  {isRussian ? 'Отмена' : 'Cancel'}
                </button>
                <button
                  onClick={() => {
                    alert(isRussian ? 'Бронирование подтверждено!' : 'Booking confirmed!');
                    setShowBookingForm(false);
                  }}
                  className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600"
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

export default CarRental;