
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import Strategy from './components/Strategy';
import ContentStudio from './components/ContentStudio';
import { AppView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('overview');

  const renderView = () => {
    switch (currentView) {
      case 'overview':
        return <Overview />;
      case 'strategy':
        return <Strategy />;
      case 'content-studio':
        return <ContentStudio />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar currentView={currentView} setView={setCurrentView} />
      
      <main className="flex-1 ml-16 md:ml-64 transition-all duration-300">
        <header className="h-14 bg-white border-b border-gray-200 flex items-center px-6 sticky top-0 z-40">
          <div className="flex items-center space-x-4">
             <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center font-bold text-gray-400 text-xs">FB</div>
             <span className="text-sm font-semibold text-gray-700">Formation Bio - recruitment-app</span>
          </div>
          <div className="ml-auto flex items-center space-x-4">
             <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200"></div>
          </div>
        </header>
        
        <div className="animate-in fade-in duration-500">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;
