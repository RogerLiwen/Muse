
import React from 'react';
import { Home, Folder, Settings, ChevronRight, UserCircle } from 'lucide-react';
import { AppView } from '../types';

interface SidebarProps {
  currentView: AppView;
  setView: (view: AppView) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  const menuItems = [
    { id: 'overview', icon: <Home size={20} />, label: '项目概览' },
    { id: 'strategy', icon: <Folder size={20} />, label: '患者策略' },
    { id: 'content-studio', icon: <UserCircle size={20} />, label: '内容工作室' },
  ];

  return (
    <div className="w-16 md:w-64 bg-white border-r border-gray-200 h-screen flex flex-col items-center py-6 fixed left-0 top-0 z-50">
      <div className="mb-10 px-4 w-full flex items-center justify-center md:justify-start">
        <div className="bg-black text-white p-1 rounded font-bold text-xs">Muse</div>
        <span className="ml-2 font-bold hidden md:block">MUSE</span>
      </div>

      <nav className="flex-1 w-full px-2 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setView(item.id as AppView)}
            className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
              currentView === item.id 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <span className="flex-shrink-0">{item.icon}</span>
            <span className="ml-3 font-medium hidden md:block">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto px-4 w-full space-y-4">
        <button className="w-full flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg hidden md:flex">
          <Settings size={20} />
          <span className="ml-3 font-medium">设置</span>
        </button>
        <button className="w-full flex items-center justify-center md:justify-between px-3 py-2 text-gray-400">
           <ChevronRight className="hidden md:block" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
