import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioCard from './components/PortfolioCard';
import Modal from './components/Modal';
import LanguageSwitcher from './components/LanguageSwitcher';
import CTAButton from './components/CTAButton';

// Import mini-apps (placeholder components for now)
import DineHub from './miniapps/DineHub';
import Carento from './miniapps/Carento';
import Maxton from './miniapps/Maxton';

function App() {
  const { t } = useTranslation();
  const [selectedApp, setSelectedApp] = useState(null);

  const portfolioApps = [
    {
      id: 'dineHub',
      title: t('dineHub.title'),
      subtitle: t('dineHub.subtitle'),
      component: DineHub,
      gradient: 'from-orange-400 to-red-400'
    },
    {
      id: 'carento',
      title: t('carento.title'),
      subtitle: t('carento.subtitle'),
      component: Carento,
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      id: 'maxton',
      title: t('maxton.title'),
      subtitle: t('maxton.subtitle'),
      component: Maxton,
      gradient: 'from-purple-400 to-indigo-400'
    }
  ];

  const openApp = (app) => {
    setSelectedApp(app);
  };

  const closeApp = () => {
    setSelectedApp(null);
  };

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #2d3748, #1a202c)',
    position: 'relative'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '3rem'
  };

  const titleStyle = {
    fontSize: '3.75rem',
    fontWeight: 'bold',
    color: '#f7fafc',
    marginBottom: '1rem',
    lineHeight: '1.25'
  };

  const subtitleStyle = {
    fontSize: '1.125rem',
    color: 'rgba(247, 250, 252, 0.8)',
    maxWidth: '48rem',
    margin: '0 auto'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '4rem',
    maxWidth: '72rem',
    margin: '0 auto 4rem auto'
  };

  const langSwitcherStyle = {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    zIndex: 10
  };

  const contentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '3rem 1.5rem'
  };

  return (
    <div style={containerStyle}>
      <style>{`
        .title-separator {
          display: inline;
        }
        @media (max-width: 768px) {
          .title-separator {
            display: none;
          }
          .title-separator::after {
            content: '';
            display: block;
            width: 60%;
            height: 1px;
            background: linear-gradient(90deg, transparent, #667eea, transparent);
            margin: 0.5rem auto;
          }
        }
      `}</style>
      {/* Language Switcher */}
      <div style={langSwitcherStyle}>
        <LanguageSwitcher />
      </div>

      {/* Main Content */}
      <div style={contentStyle}>
        {/* Header */}
        <motion.div 
          style={headerStyle}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={titleStyle}>
            {t('title')}
            <span className="title-separator"> {t('titleSeparator', '|')} </span>
            <br />
            {t('subtitle')}
          </h1>
          <p style={subtitleStyle}>
            {t('mainSubtitle')}
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div style={gridStyle}>
          {portfolioApps.map((app, index) => (
            <div key={app.id}>
              <PortfolioCard
                title={app.title}
                subtitle={app.subtitle}
                gradient={app.gradient}
                onClick={() => openApp(app)}
              />
            </div>
          ))}
        </div>

        {/* f01i.ai Startup Card */}
        <motion.div 
          style={{ 
            marginBottom: '3rem',
            display: 'flex',
            justifyContent: 'center'
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div
            style={{
              maxWidth: '600px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '1rem',
              padding: '2rem',
              boxShadow: '0 20px 40px rgba(0, 151, 178, 0.2)',
              border: '2px solid rgba(0, 151, 178, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onClick={() => window.open('https://www.f01i.ai', '_blank')}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 151, 178, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 151, 178, 0.2)';
            }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#0097B2',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              {t('f01iAi.title')}
            </h3>
            <p style={{
              color: '#474545',
              lineHeight: '1.6',
              fontSize: '0.95rem'
            }}>
              {t('f01iAi.subtitle')}
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          style={{ textAlign: 'center' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <CTAButton />
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedApp && (
          <Modal onClose={closeApp}>
            <selectedApp.component />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;