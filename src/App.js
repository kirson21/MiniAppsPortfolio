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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAECEC] to-[#f5e6e6] relative">
      {/* Language Switcher */}
      <div className="absolute top-6 right-6 z-10">
        <LanguageSwitcher />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#474545] mb-4 leading-tight">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-[#474545]/80 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {portfolioApps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <PortfolioCard
                title={app.title}
                subtitle={app.subtitle}
                gradient={app.gradient}
                onClick={() => openApp(app)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
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