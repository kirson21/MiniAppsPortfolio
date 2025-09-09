import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioCard from './components/PortfolioCard';
import Modal from './components/Modal';
import LanguageSwitcher from './components/LanguageSwitcher';
import CTAButton from './components/CTAButton';

// Import all mini-apps
import DanceStudio from './miniapps/DanceStudio';
import CarRental from './miniapps/CarRental';
import MerchStore from './miniapps/MerchStore';
import ConcertTickets from './miniapps/ConcertTickets';
import CalorieCounter from './miniapps/CalorieCounter';
import ResumeAnalyzer from './miniapps/ResumeAnalyzer';

function App() {
  const { t } = useTranslation();
  const [selectedApp, setSelectedApp] = useState(null);

  const portfolioApps = [
    {
      id: 'danceStudio',
      title: t('danceStudio.title'),
      subtitle: t('danceStudio.subtitle'),
      component: DanceStudio,
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      id: 'carRental',
      title: t('carRental.title'),
      subtitle: t('carRental.subtitle'),
      component: CarRental,
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      id: 'merchStore',
      title: t('merchStore.title'),
      subtitle: t('merchStore.subtitle'),
      component: MerchStore,
      gradient: 'from-green-400 to-emerald-400'
    },
    {
      id: 'concertTickets',
      title: t('concertTickets.title'),
      subtitle: t('concertTickets.subtitle'),
      component: ConcertTickets,
      gradient: 'from-orange-400 to-red-400'
    },
    {
      id: 'calorieCounter',
      title: t('calorieCounter.title'),
      subtitle: t('calorieCounter.subtitle'),
      component: CalorieCounter,
      gradient: 'from-yellow-400 to-orange-400'
    },
    {
      id: 'resumeAnalyzer',
      title: t('resumeAnalyzer.title'),
      subtitle: t('resumeAnalyzer.subtitle'),
      component: ResumeAnalyzer,
      gradient: 'from-indigo-400 to-purple-400'
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
          </h1>
          <p style={subtitleStyle}>
            {t('subtitle')}
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