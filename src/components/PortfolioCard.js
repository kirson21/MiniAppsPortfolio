import React from 'react';
import { motion } from 'framer-motion';

const PortfolioCard = ({ title, subtitle, gradient, onClick }) => {
  const cardStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '1rem',
    backgroundColor: 'white',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    cursor: 'pointer',
    height: '16rem',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(0, 0, 0, 0.05)'
  };

  const gradientOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.1), rgba(255, 182, 193, 0.1))',
    opacity: 0.1,
    transition: 'opacity 0.3s ease'
  };

  const contentStyle = {
    position: 'relative',
    padding: '2rem',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#474545',
    marginBottom: '0.75rem',
    transition: 'color 0.3s ease'
  };

  const subtitleStyle = {
    color: 'rgba(71, 69, 69, 0.7)',
    fontSize: '0.875rem',
    lineHeight: '1.6'
  };

  const arrowStyle = {
    position: 'absolute',
    bottom: '1.5rem',
    right: '1.5rem',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    width: '1.5rem',
    height: '1.5rem',
    color: '#0097B2'
  };

  return (
    <motion.div
      style={cardStyle}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(0, 151, 178, 0.3)"
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      onMouseEnter={(e) => {
        const overlay = e.currentTarget.querySelector('.gradient-overlay');
        const arrow = e.currentTarget.querySelector('.hover-arrow');
        const title = e.currentTarget.querySelector('.card-title');
        if (overlay) overlay.style.opacity = '0.2';
        if (arrow) arrow.style.opacity = '1';
        if (title) title.style.color = '#0097B2';
      }}
      onMouseLeave={(e) => {
        const overlay = e.currentTarget.querySelector('.gradient-overlay');
        const arrow = e.currentTarget.querySelector('.hover-arrow');
        const title = e.currentTarget.querySelector('.card-title');
        if (overlay) overlay.style.opacity = '0.1';
        if (arrow) arrow.style.opacity = '0';
        if (title) title.style.color = '#474545';
      }}
    >
      {/* Gradient Background */}
      <div className="gradient-overlay" style={gradientOverlayStyle} />
      
      {/* Content */}
      <div style={contentStyle}>
        <h3 className="card-title" style={titleStyle}>
          {title}
        </h3>
        <p style={subtitleStyle}>
          {subtitle}
        </p>
        
        {/* Hover Arrow */}
        <div className="hover-arrow" style={arrowStyle}>
          <svg 
            style={{ width: '100%', height: '100%' }}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;