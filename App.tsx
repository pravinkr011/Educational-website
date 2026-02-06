
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CrisisBanner from './components/CrisisBanner';
import Hero from './components/Hero';
import ServiceGrid from './components/ServiceGrid';
import NoticeEngine from './components/NoticeEngine';
import TransparencyDashboard from './components/TransparencyDashboard';
import TrustSection from './components/TrustSection';
import ResourceLibrary from './components/ResourceLibrary';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import { AccessibilityConfig } from './types';

const App: React.FC = () => {
  const [config, setConfig] = useState<AccessibilityConfig>({
    fontSize: 'normal',
    highContrast: false,
  });

  const toggleHighContrast = () => {
    setConfig(prev => ({ ...prev, highContrast: !prev.highContrast }));
  };

  const adjustFontSize = (size: 'normal' | 'large' | 'extra-large') => {
    setConfig(prev => ({ ...prev, fontSize: size }));
  };

  useEffect(() => {
    const root = document.documentElement;
    switch (config.fontSize) {
      case 'large': root.style.fontSize = '18px'; break;
      case 'extra-large': root.style.fontSize = '20px'; break;
      default: root.style.fontSize = '16px';
    }

    if (config.highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [config]);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300`}>
      <Header onToggleContrast={toggleHighContrast} onAdjustFont={adjustFontSize} />
      
      <main className="flex-grow">
        <CrisisBanner />
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 py-12">
          <ServiceGrid />
          <NoticeEngine />
          <TransparencyDashboard />
          <TrustSection />
          <ResourceLibrary />
        </div>
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
