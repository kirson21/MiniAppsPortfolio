import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
  };

  const buttonStyle = {
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(4px)',
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    border: '1px solid rgba(0, 151, 178, 0.2)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const textStyle = {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#474545'
  };

  const iconStyle = {
    width: '1rem',
    height: '1rem',
    color: '#0097B2'
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      style={buttonStyle}
      whileHover={{ 
        scale: 1.05,
        borderColor: 'rgba(0, 151, 178, 0.4)'
      }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0, 151, 178, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0, 151, 178, 0.2)';
      }}
    >
      <div style={containerStyle}>
        <span style={textStyle}>
          {i18n.language === 'en' ? '🇺🇸 EN' : '🇷🇺 RU'}
        </span>
        <svg 
          style={iconStyle}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" 
          />
        </svg>
      </div>
    </motion.button>
  );
};

export default LanguageSwitcher;