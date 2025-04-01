import React from 'react';
import { CoinsIcon } from 'lucide-react';
export const Header = () => {
  return <header className="px-4 py-6 bg-gray-900 text-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">SC</span>
          </div>
          <h1 className="text-xl font-bold">Steps Casino</h1>
        </div>
        <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full">
          <CoinsIcon className="w-5 h-5 text-green-400" />
          <span className="font-medium">12,458</span>
          <span className="text-sm text-gray-400">coins</span>
        </div>
      </div>
    </header>;
};