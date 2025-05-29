import React, { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';
import { Navigation } from './components/Layout/Navigation';
import { HomePage } from './components/Pages/HomePage';
import { ServicesPage } from './components/Pages/ServicesPage';
import { CasesPage } from './components/Pages/CasesPage';
import { ReviewsPage } from './components/Pages/ReviewsPage';
import { AboutPage } from './components/Pages/AboutPage';
import { logger } from './utils/logger';

function App() {
  const [userData, setUserData] = useState({
    name: 'Гость',
    username: '',
    photoUrl: '',
  });
  const [activeTab, setActiveTab] = useState('home');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    logger.info('App', 'Application starting...');
    WebApp.ready();
    WebApp.expand();
    WebApp.setHeaderColor('#1F2937');
    logger.info('App', 'Telegram WebApp initialized');

    const initData = WebApp.initDataUnsafe;
    if (initData.user) {
      const userInfo = {
        name: initData.user.first_name.split(' ')[0],
        username: initData.user.username || '',
        photoUrl: initData.user.photo_url || '',
      };
      
      logger.info('User', 'User data received', {
        userId: initData.user.id,
        username: initData.user.username
      });
      
      setUserData(userInfo);

      fetch('https://gorskybase.store/webhook/2d2bbe9f-5c06-483f-8ef4-e0b1de5816ac', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: initData.user.id,
          username: initData.user.username || '',
          name: initData.user.first_name,
          photoUrl: initData.user.photo_url || '',
          visitDate: new Date().toISOString()
        })
      })
        .then(() => logger.info('Webhook', 'User data sent to n8n successfully'))
        .catch(error => logger.error('Webhook', 'Error sending data to n8n', error));
    } else {
      logger.info('User', 'No user data available');
    }
  }, []);

  const handleTabChange = (tab: string) => {
    logger.info('Navigation', `Tab changed to: ${tab}`);
    setActiveTab(tab);
    setSelectedService(null);
  };

  const handleServiceSelect = (serviceId: string) => {
    logger.info('Services', `Service selected: ${serviceId}`);
    setSelectedService(serviceId);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage userData={userData} onActionClick={handleTabChange} />;
      case 'services':
        return (
          <ServicesPage
            selectedService={selectedService}
            onServiceSelect={handleServiceSelect}
            onBack={() => {
              logger.info('Services', 'Returning to services list');
              setSelectedService(null);
            }}
          />
        );
      case 'cases':
        return <CasesPage />;
      case 'reviews':
        return <ReviewsPage />;
      case 'about':
        return <AboutPage />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="pb-20">
        {renderContent()}
      </div>
      <Navigation
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onServiceReset={() => setSelectedService(null)}
      />
    </div>
  );
}

export default App;