import React from 'react';
import { HomeIcon, TrophyIcon, SettingsIcon, UserIcon } from 'lucide-react';
export const BottomNav = () => {
  return <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 px-6 py-3">
      <div className="flex justify-between items-center">
        {[{
        icon: <HomeIcon className="w-6 h-6" />,
        label: 'Home'
      }, {
        icon: <TrophyIcon className="w-6 h-6" />,
        label: 'Rewards'
      }, {
        icon: <SettingsIcon className="w-6 h-6" />,
        label: 'Settings'
      }, {
        icon: <UserIcon className="w-6 h-6" />,
        label: 'Profile'
      }].map(item => <button key={item.label} className="flex flex-col items-center space-y-1 text-gray-400 hover:text-white">
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </button>)}
      </div>
    </nav>;
};