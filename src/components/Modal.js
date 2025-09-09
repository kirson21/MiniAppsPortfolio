import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Modal = ({ children, onClose }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      {/* Modal Content */}
      <motion.div
        className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Demo Notice */}
        <div className="bg-gradient-to-r from-[#0097B2] to-[#007a94] text-white px-6 py-3 text-center text-sm font-medium">
          {t('demo')}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-[#474545] hover:text-[#0097B2] transition-all duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* App Content */}
        <div className="h-[calc(90vh-80px)] overflow-hidden">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;