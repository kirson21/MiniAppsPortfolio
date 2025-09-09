import React from 'react';
import { motion } from 'framer-motion';

const PortfolioCard = ({ title, subtitle, gradient, onClick }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-white shadow-lg cursor-pointer group h-64"
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
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
      
      {/* Content */}
      <div className="relative p-8 h-full flex flex-col justify-center items-center text-center">
        <motion.h3 
          className="text-xl font-semibold text-[#474545] mb-3 group-hover:text-[#0097B2] transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-[#474545]/70 text-sm leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
        
        {/* Hover Arrow */}
        <motion.div
          className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: 10 }}
          whileHover={{ x: 0 }}
        >
          <svg 
            className="w-6 h-6 text-[#0097B2]" 
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
        </motion.div>
      </div>

      {/* Subtle Border */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 group-hover:ring-[#0097B2]/30 transition-all duration-300" />
    </motion.div>
  );
};

export default PortfolioCard;