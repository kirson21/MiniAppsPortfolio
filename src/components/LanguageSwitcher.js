import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-[#0097B2]/20 hover:border-[#0097B2]/40 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-[#474545]">
          {i18n.language === 'en' ? '🇺🇸 EN' : '🇷🇺 RU'}
        </span>
        <svg 
          className="w-4 h-4 text-[#0097B2]" 
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