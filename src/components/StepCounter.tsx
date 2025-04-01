import React from 'react';
import { CoinsIcon, TrendingUpIcon } from 'lucide-react';
export const StepCounter = () => {
  return <div className="p-4 bg-gray-800 rounded-lg mx-4 my-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-white mb-1">
            Step Coins Balance
          </h2>
          <div className="flex items-center space-x-2">
            <CoinsIcon className="w-6 h-6 text-green-400" />
            <span className="text-3xl font-bold text-white">12,458</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">Each step = 1 coin</p>
        </div>
        <div className="bg-gray-700 px-4 py-3 rounded-lg">
          <div className="flex items-center space-x-2 text-green-400">
            <TrendingUpIcon className="w-4 h-4" />
            <span className="text-sm">+234 today</span>
          </div>
        </div>
      </div>
    </div>;
};