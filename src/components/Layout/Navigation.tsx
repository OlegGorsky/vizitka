import React from 'react';
import { Home, Briefcase, Star, MessageSquare, User } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onServiceReset: () => void;
}

export function Navigation({ activeTab, onTabChange, onServiceReset }: NavigationProps) {
  const handleTabClick = (tab: string) => {
    onTabChange(tab);
    onServiceReset();
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 px-4 py-2">
      <div className="flex justify-around items-center">
        <NavButton
          icon={Home}
          label="Главная"
          isActive={activeTab === 'home'}
          onClick={() => handleTabClick('home')}
        />
        <NavButton
          icon={Star}
          label="Услуги"
          isActive={activeTab === 'services'}
          onClick={() => handleTabClick('services')}
        />
        <NavButton
          icon={Briefcase}
          label="Кейсы"
          isActive={activeTab === 'cases'}
          onClick={() => handleTabClick('cases')}
        />
        <NavButton
          icon={MessageSquare}
          label="Отзывы"
          isActive={activeTab === 'reviews'}
          onClick={() => handleTabClick('reviews')}
        />
        <NavButton
          icon={User}
          label="Обо мне"
          isActive={activeTab === 'about'}
          onClick={() => handleTabClick('about')}
        />
      </div>
    </nav>
  );
}

interface NavButtonProps {
  icon: React.ElementType;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function NavButton({ icon: Icon, label, isActive, onClick }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center p-2 ${isActive ? 'text-purple-400' : 'text-gray-400'}`}
    >
      <Icon size={20} />
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
}