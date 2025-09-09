import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ConcertTickets = () => {
  const { i18n } = useTranslation();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showBooking, setShowBooking] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const isRussian = i18n.language === 'ru';

  const events = [
    {
      id: 1,
      name: isRussian ? 'Рок-фестиваль "Гром"' : 'Thunder Rock Festival',
      artist: isRussian ? 'Разные исполнители' : 'Various Artists',
      date: isRussian ? '15 Марта 2024' : 'March 15, 2024',
      time: '19:00',
      venue: isRussian ? 'Стадион "Центральный"' : 'Central Stadium',
      category: 'rock',
      image: '🎸',
      prices: { vip: 150, standard: 75, economy: 35 },
      rating: 4.8
    },
    {
      id: 2,
      name: isRussian ? 'Джазовый вечер' : 'Jazz Evening',
      artist: isRussian ? 'Квартет "Синий блюз"' : 'Blue Jazz Quartet',
      date: isRussian ? '22 Марта 2024' : 'March 22, 2024',
      time: '20:30',
      venue: isRussian ? 'Джаз-клуб "Нота"' : 'Note Jazz Club',
      category: 'jazz',
      image: '🎷',
      prices: { vip: 80, standard: 50, economy: 25 },
      rating: 4.9
    },
    {
      id: 3,
      name: isRussian ? 'Электронная ночь' : 'Electronic Night',
      artist: 'DJ Nexus',
      date: isRussian ? '28 Марта 2024' : 'March 28, 2024',
      time: '22:00',
      venue: isRussian ? 'Клуб "Пульс"' : 'Pulse Club',
      category: 'electronic',
      image: '🎧',
      prices: { vip: 100, standard: 60, economy: 30 },
      rating: 4.7
    },
    {
      id: 4,
      name: isRussian ? 'Классический концерт' : 'Classical Concert',
      artist: isRussian ? 'Симфонический оркестр' : 'Symphony Orchestra',
      date: isRussian ? '5 Апреля 2024' : 'April 5, 2024',
      time: '19:30',
      venue: isRussian ? 'Филармония' : 'Philharmonic Hall',
      category: 'classical',
      image: '🎼',
      prices: { vip: 120, standard: 70, economy: 40 },
      rating: 4.9
    }
  ];

  const filters = [
    { id: 'all', label: isRussian ? 'Все события' : 'All Events' },
    { id: 'rock', label: isRussian ? 'Рок' : 'Rock' },
    { id: 'jazz', label: isRussian ? 'Джаз' : 'Jazz' },
    { id: 'electronic', label: isRussian ? 'Электроника' : 'Electronic' },
    { id: 'classical', label: isRussian ? 'Классика' : 'Classical' }
  ];

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.category === activeFilter);

  const seatTypes = [
    { 
      id: 'vip', 
      name: 'VIP', 
      description: isRussian ? 'Лучшие места' : 'Best seats',
      color: 'bg-yellow-500' 
    },
    { 
      id: 'standard', 
      name: isRussian ? 'Стандарт' : 'Standard', 
      description: isRussian ? 'Хорошие места' : 'Good seats',
      color: 'bg-blue-500' 
    },
    { 
      id: 'economy', 
      name: isRussian ? 'Эконом' : 'Economy', 
      description: isRussian ? 'Бюджетные места' : 'Budget seats',
      color: 'bg-green-500' 
    }
  ];

  const selectSeat = (seatType, quantity) => {
    const existingSeat = selectedSeats.find(s => s.type === seatType);
    if (existingSeat) {
      setSelectedSeats(selectedSeats.map(s => 
        s.type === seatType ? { ...s, quantity } : s
      ).filter(s => s.quantity > 0));
    } else if (quantity > 0) {
      setSelectedSeats([...selectedSeats, { type: seatType, quantity }]);
    }
  };

  const getTotalPrice = () => {
    if (!selectedEvent) return 0;
    return selectedSeats.reduce((total, seat) => {
      return total + (selectedEvent.prices[seat.type] * seat.quantity);
    }, 0);
  };

  const getTotalTickets = () => {
    return selectedSeats.reduce((total, seat) => total + seat.quantity, 0);
  };

  return (
    <div className="h-full bg-gradient-to-br from-orange-50 to-red-50 overflow-auto custom-scrollbar">
      <div className="p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {isRussian ? '🎵 Билеты на концерты' : '🎵 Concert Tickets'}
          </h1>
          <p className="text-gray-600">
            {isRussian ? 'Лучшие события города в одном месте' : 'Best city events in one place'}
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
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-orange-50 shadow-md'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Events List */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              layout
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <div className="text-4xl">{event.image}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {event.name}
                    </h3>
                    <p className="text-orange-600 font-medium mb-1">{event.artist}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>📅 {event.date}</span>
                      <span>🕐 {event.time}</span>
                      <span>📍 {event.venue}</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-500 mr-1">⭐</span>
                      <span className="text-sm font-medium">{event.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm text-gray-600">
                      {isRussian ? 'от' : 'from'}
                    </p>
                    <p className="text-2xl font-bold text-orange-600">
                      ${Math.min(...Object.values(event.prices))}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedEvent(event);
                      setSelectedSeats([]);
                      setShowBooking(true);
                    }}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                  >
                    {isRussian ? 'Купить билет' : 'Buy Ticket'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Booking Modal */}
        <AnimatePresence>
          {showBooking && selectedEvent && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowBooking(false)}
            >
              <motion.div
                className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-semibold">
                    {isRussian ? 'Выбор билетов' : 'Select Tickets'}
                  </h3>
                  <button
                    onClick={() => setShowBooking(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>

                {/* Event Info */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{selectedEvent.image}</span>
                    <div>
                      <h4 className="font-semibold text-lg">{selectedEvent.name}</h4>
                      <p className="text-orange-600">{selectedEvent.artist}</p>
                      <p className="text-gray-600 text-sm">
                        {selectedEvent.date} • {selectedEvent.time} • {selectedEvent.venue}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Seat Selection */}
                <div className="space-y-4 mb-6">
                  <h4 className="text-lg font-semibold">
                    {isRussian ? 'Выберите места:' : 'Select Seats:'}
                  </h4>
                  {seatTypes.map((seatType) => (
                    <div key={seatType.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded ${seatType.color}`}></div>
                          <div>
                            <p className="font-medium">{seatType.name}</p>
                            <p className="text-sm text-gray-600">{seatType.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold">
                            ${selectedEvent.prices[seatType.id]}
                          </p>
                          <p className="text-sm text-gray-600">
                            {isRussian ? 'за билет' : 'per ticket'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <label className="text-sm font-medium">
                          {isRussian ? 'Количество:' : 'Quantity:'}
                        </label>
                        <select
                          className="border rounded-md px-3 py-1"
                          value={selectedSeats.find(s => s.type === seatType.id)?.quantity || 0}
                          onChange={(e) => selectSeat(seatType.id, parseInt(e.target.value))}
                        >
                          {[0, 1, 2, 3, 4, 5, 6].map(num => (
                            <option key={num} value={num}>{num}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Summary */}
                {selectedSeats.length > 0 && (
                  <div className="bg-orange-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold mb-3">
                      {isRussian ? 'Итого:' : 'Order Summary:'}
                    </h4>
                    {selectedSeats.map((seat) => {
                      const seatType = seatTypes.find(s => s.id === seat.type);
                      const price = selectedEvent.prices[seat.type];
                      return (
                        <div key={seat.type} className="flex justify-between items-center mb-2">
                          <span>{seatType.name} × {seat.quantity}</span>
                          <span className="font-medium">${price * seat.quantity}</span>
                        </div>
                      );
                    })}
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>
                          {isRussian ? `Всего билетов: ${getTotalTickets()}` : `Total tickets: ${getTotalTickets()}`}
                        </span>
                        <span className="text-orange-600">${getTotalPrice()}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Customer Info */}
                {selectedSeats.length > 0 && (
                  <div className="space-y-4 mb-6">
                    <h4 className="text-lg font-semibold">
                      {isRussian ? 'Информация о покупателе:' : 'Customer Information:'}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder={isRussian ? 'Имя' : 'First Name'}
                        className="p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                      />
                      <input
                        type="text"
                        placeholder={isRussian ? 'Фамилия' : 'Last Name'}
                        className="p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                      />
                      <input
                        type="tel"
                        placeholder={isRussian ? 'Телефон' : 'Phone'}
                        className="p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowBooking(false)}
                    className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    {isRussian ? 'Отмена' : 'Cancel'}
                  </button>
                  {selectedSeats.length > 0 && (
                    <button
                      onClick={() => {
                        alert(isRussian 
                          ? `Билеты заказаны! Сумма: $${getTotalPrice()}` 
                          : `Tickets ordered! Total: $${getTotalPrice()}`
                        );
                        setShowBooking(false);
                        setSelectedSeats([]);
                      }}
                      className="flex-1 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600"
                    >
                      {isRussian ? `Купить за $${getTotalPrice()}` : `Buy for $${getTotalPrice()}`}
                    </button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ConcertTickets;