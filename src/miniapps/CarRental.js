import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CarRental = () => {
  const { i18n } = useTranslation();
  const [selectedCar, setSelectedCar] = useState(null);

  const isRussian = i18n.language === 'ru';

  const cars = [
    {
      id: 1,
      name: 'BMW X5 2024',
      type: isRussian ? 'Премиум SUV' : 'Premium SUV',
      image: '🚙',
      price: 89,
      originalPrice: 120,
      rating: 4.8,
      reviews: 124,
      features: {
        fuel: isRussian ? 'Бензин' : 'Gasoline',
        transmission: isRussian ? 'Автомат' : 'Automatic',
        seats: 5,
        doors: 4
      },
      specs: isRussian ? ['Кожаные сиденья', 'Панорамная крыша', 'Apple CarPlay', 'Системы безопасности'] : ['Leather Seats', 'Panoramic Roof', 'Apple CarPlay', 'Safety Systems'],
      location: isRussian ? 'Центр города' : 'Downtown',
      available: true,
      discount: 26
    },
    {
      id: 2,
      name: 'Tesla Model S',
      type: isRussian ? 'Электрический седан' : 'Electric Sedan',
      image: '🚗',
      price: 95,
      originalPrice: 130,
      rating: 4.9,
      reviews: 89,
      features: {
        fuel: isRussian ? 'Электро' : 'Electric',
        transmission: isRussian ? 'Автомат' : 'Automatic',
        seats: 5,
        doors: 4
      },
      specs: isRussian ? ['Автопилот', 'Быстрая зарядка', 'Премиум аудио', 'Экранное управление'] : ['Autopilot', 'Supercharging', 'Premium Audio', 'Touchscreen Control'],
      location: isRussian ? 'Аэропорт' : 'Airport',
      available: true,
      discount: 27
    },
    {
      id: 3,
      name: 'Mercedes GLC',
      type: isRussian ? 'Компактный SUV' : 'Compact SUV',
      image: '🚐',
      price: 75,
      originalPrice: 105,
      rating: 4.7,
      reviews: 156,
      features: {
        fuel: isRussian ? 'Бензин' : 'Gasoline',
        transmission: isRussian ? 'Автомат' : 'Automatic',
        seats: 5,
        doors: 4
      },
      specs: isRussian ? ['Климат-контроль', 'Навигация', 'Камера заднего вида', 'Спорт-режим'] : ['Climate Control', 'Navigation', 'Rear Camera', 'Sport Mode'],
      location: isRussian ? 'Вокзал' : 'Train Station',
      available: false,
      discount: 29
    }
  ];

  const [userLocation] = useState(isRussian ? 'Москва, Россия' : 'New York, USA');

  const containerStyle = {
    height: '100%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    overflow: 'auto',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
  };

  const headerStyle = {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    padding: '20px 24px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderRadius: '20px',
    padding: '24px',
    marginBottom: '20px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease'
  };

  const CarCard = ({ car }) => (
    <motion.div
      style={cardStyle}
      whileHover={{ 
        transform: 'translateY(-8px)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
      }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setSelectedCar(car)}
    >
      {/* Car Image and Discount Badge */}
      <div style={{ position: 'relative', marginBottom: '20px' }}>
        <div style={{ 
          fontSize: '80px', 
          textAlign: 'center',
          filter: car.available ? 'none' : 'grayscale(100%) opacity(0.5)'
        }}>
          {car.image}
        </div>
        {car.available && (
          <div style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: '600'
          }}>
            -{car.discount}%
          </div>
        )}
      </div>

      {/* Car Info */}
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ 
          fontSize: '20px', 
          fontWeight: '700', 
          color: '#2d3748', 
          marginBottom: '4px' 
        }}>
          {car.name}
        </h3>
        <p style={{ 
          color: '#718096', 
          fontSize: '14px',
          marginBottom: '12px'
        }}>
          {car.type} • {car.location}
        </p>
        
        {/* Rating */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <span style={{ color: '#fbbf24', marginRight: '4px' }}>⭐</span>
          <span style={{ fontSize: '14px', fontWeight: '600', color: '#2d3748' }}>
            {car.rating}
          </span>
          <span style={{ fontSize: '12px', color: '#9ca3af', marginLeft: '4px' }}>
            ({car.reviews} {isRussian ? 'отзывов' : 'reviews'})
          </span>
        </div>
      </div>

      {/* Features */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '12px',
        marginBottom: '20px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '8px' }}>⛽</span>
          <span style={{ fontSize: '13px', color: '#4a5568' }}>{car.features.fuel}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '8px' }}>⚙️</span>
          <span style={{ fontSize: '13px', color: '#4a5568' }}>{car.features.transmission}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '8px' }}>👥</span>
          <span style={{ fontSize: '13px', color: '#4a5568' }}>{car.features.seats} {isRussian ? 'мест' : 'seats'}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '8px' }}>🚪</span>
          <span style={{ fontSize: '13px', color: '#4a5568' }}>{car.features.doors} {isRussian ? 'двери' : 'doors'}</span>
        </div>
      </div>

      {/* Price and Button */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        paddingTop: '16px',
        borderTop: '1px solid rgba(0, 0, 0, 0.08)'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ 
              fontSize: '24px', 
              fontWeight: '700', 
              color: '#2d3748' 
            }}>
              ${car.price}
            </span>
            <span style={{ 
              fontSize: '14px', 
              color: '#9ca3af',
              textDecoration: 'line-through'
            }}>
              ${car.originalPrice}
            </span>
          </div>
          <span style={{ 
            fontSize: '12px', 
            color: '#718096' 
          }}>
            {isRussian ? 'за день' : 'per day'}
          </span>
        </div>
        
        <button
          style={{
            background: car.available 
              ? 'linear-gradient(135deg, #667eea, #764ba2)' 
              : '#e2e8f0',
            color: car.available ? 'white' : '#9ca3af',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '25px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: car.available ? 'pointer' : 'not-allowed',
            transition: 'all 0.3s ease'
          }}
          disabled={!car.available}
          onMouseEnter={(e) => {
            if (car.available) {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
            }
          }}
          onMouseLeave={(e) => {
            if (car.available) {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }
          }}
        >
          {car.available 
            ? (isRussian ? 'Забронировать' : 'Book Now')
            : (isRussian ? 'Недоступен' : 'Unavailable')
          }
        </button>
      </div>

      {/* Availability Status */}
      {!car.available && (
        <div style={{
          marginTop: '12px',
          padding: '8px 12px',
          background: 'rgba(239, 68, 68, 0.1)',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <span style={{ 
            fontSize: '12px', 
            color: '#dc2626',
            fontWeight: '500'
          }}>
            {isRussian ? 'Автомобиль забронирован до завтра' : 'Car booked until tomorrow'}
          </span>
        </div>
      )}
    </motion.div>
  );

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div>
            <h1 style={{ 
              fontSize: '28px', 
              fontWeight: '800', 
              color: '#2d3748',
              marginBottom: '4px'
            }}>
              {isRussian ? '🚗 DriveEasy' : '🚗 DriveEasy'}
            </h1>
            <p style={{ color: '#718096', fontSize: '14px' }}>
              {isRussian ? 'Найдите идеальный автомобиль' : 'Find your perfect ride'}
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '12px', color: '#9ca3af' }}>
              {isRussian ? 'Ваше местоположение' : 'Your location'}
            </p>
            <p style={{ fontSize: '14px', fontWeight: '600', color: '#2d3748' }}>
              📍 {userLocation}
            </p>
          </div>
        </div>
        
        {/* Search Bar */}
        <div style={{
          background: 'rgba(247, 250, 252, 0.8)',
          borderRadius: '16px',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          border: '1px solid rgba(0, 0, 0, 0.08)'
        }}>
          <span style={{ marginRight: '12px', color: '#9ca3af' }}>🔍</span>
          <input
            type="text"
            placeholder={isRussian ? 'Поиск автомобилей...' : 'Search cars...'}
            style={{
              border: 'none',
              background: 'transparent',
              outline: 'none',
              flex: 1,
              fontSize: '16px',
              color: '#2d3748'
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '24px' }}>
        {/* Available Cars Section */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h2 style={{ 
              fontSize: '20px', 
              fontWeight: '700', 
              color: 'white',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
              {isRussian ? 'Доступные автомобили' : 'Available Cars'}
            </h2>
            <span style={{ 
              fontSize: '14px', 
              color: 'rgba(255, 255, 255, 0.8)',
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '6px 12px',
              borderRadius: '20px'
            }}>
              {cars.filter(car => car.available).length} {isRussian ? 'доступно' : 'available'}
            </span>
          </div>
          
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>

      {/* Car Details Modal */}
      {selectedCar && (
        <motion.div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedCar(null)}
        >
          <motion.div
            style={{
              background: 'white',
              borderRadius: '24px',
              padding: '32px',
              maxWidth: '500px',
              width: '100%',
              maxHeight: '80vh',
              overflow: 'auto'
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ fontSize: '100px', marginBottom: '16px' }}>
                {selectedCar.image}
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#2d3748', marginBottom: '8px' }}>
                {selectedCar.name}
              </h3>
              <p style={{ color: '#718096' }}>{selectedCar.type}</p>
            </div>

            {/* Specifications */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#2d3748', marginBottom: '16px' }}>
                {isRussian ? 'Особенности' : 'Features'}
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {selectedCar.specs.map((spec, index) => (
                  <div key={index} style={{
                    background: 'rgba(102, 126, 234, 0.1)',
                    padding: '12px',
                    borderRadius: '12px',
                    fontSize: '14px',
                    color: '#4c51bf',
                    textAlign: 'center'
                  }}>
                    {spec}
                  </div>
                ))}
              </div>
            </div>

            {/* Price and Book Button */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '24px',
              background: 'rgba(247, 250, 252, 0.8)',
              borderRadius: '16px',
              marginBottom: '24px'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '28px', fontWeight: '700', color: '#2d3748' }}>
                    ${selectedCar.price}
                  </span>
                  <span style={{ fontSize: '16px', color: '#9ca3af', textDecoration: 'line-through' }}>
                    ${selectedCar.originalPrice}
                  </span>
                </div>
                <span style={{ fontSize: '14px', color: '#718096' }}>
                  {isRussian ? 'за день' : 'per day'}
                </span>
              </div>
              <button
                onClick={() => {
                  alert(isRussian 
                    ? `Автомобиль ${selectedCar.name} забронирован!` 
                    : `${selectedCar.name} booked successfully!`
                  );
                  setSelectedCar(null);
                }}
                style={{
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  color: 'white',
                  border: 'none',
                  padding: '16px 32px',
                  borderRadius: '25px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                {isRussian ? 'Забронировать сейчас' : 'Book Now'}
              </button>
            </div>

            <button
              onClick={() => setSelectedCar(null)}
              style={{
                width: '100%',
                background: 'transparent',
                border: '2px solid #e2e8f0',
                padding: '12px',
                borderRadius: '12px',
                color: '#718096',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              {isRussian ? 'Закрыть' : 'Close'}
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default CarRental;