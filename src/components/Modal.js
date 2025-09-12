import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Modal = ({ children, onClose }) => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on mount
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const backdropStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: isMobile ? '0' : '1rem'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(4px)'
  };

  const modalStyle = {
    position: 'relative',
    width: isMobile ? '100vw' : '100%',
    height: isMobile ? '100vh' : 'auto',
    maxWidth: isMobile ? 'none' : '80rem',
    maxHeight: isMobile ? 'none' : '90vh',
    backgroundColor: 'white',
    borderRadius: isMobile ? '0' : '1rem',
    boxShadow: isMobile ? 'none' : '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    overflow: 'hidden'
  };

  const demoNoticeStyle = {
    background: 'linear-gradient(to right, #0097B2, #007a94)',
    color: 'white',
    padding: '0.75rem 1.5rem',
    textAlign: 'center',
    fontSize: '0.875rem',
    fontWeight: '500'
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    zIndex: 10,
    width: '2.5rem',
    height: '2.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '9999px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#474545',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  };

  const contentStyle = {
    height: isMobile ? 'calc(100vh - 80px)' : 'calc(90vh - 80px)',
    overflow: 'hidden'
  };

  return (
    <motion.div
      style={backdropStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div style={overlayStyle} />
      
      {/* Modal Content */}
      <motion.div
        style={isMobile ? modalStyleMobile : modalStyle}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Demo Notice */}
        <div style={demoNoticeStyle}>
          {t('demo')}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          style={closeButtonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.color = '#0097B2';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            e.currentTarget.style.color = '#474545';
          }}
        >
          <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* App Content */}
        <div style={isMobile ? contentStyleMobile : contentStyle}>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;