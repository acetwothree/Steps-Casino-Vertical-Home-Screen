import React from 'react';
import { DicesIcon, TargetIcon, Gamepad2Icon } from 'lucide-react';
function CardIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="18" rx="2" />
      <path d="M11 7h2v10h-2z" />
      <path d="M15 7h2v10h-2z" />
      <path d="M7 7h2v10H7z" />
    </svg>;
}
export const GameCategories = () => {
  return <div className="px-4 mt-6">
      <h2 className="text-lg font-semibold text-white mb-4">Games</h2>
      <div className="grid grid-cols-2 gap-4">
        {[{
        icon: <DicesIcon className="w-6 h-6" />,
        name: 'Dice',
        cost: '1,000 coins'
      }, {
        icon: <CardIcon className="w-6 h-6" />,
        name: 'Blackjack',
        cost: '2,000 coins'
      }, {
        icon: <TargetIcon className="w-6 h-6" />,
        name: 'Roulette',
        cost: '1,500 coins'
      }, {
        icon: <Gamepad2Icon className="w-6 h-6" />,
        name: 'Slots',
        cost: '500 coins'
      }].map(game => <button key={game.name} className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg space-y-2 text-white hover:bg-gray-700">
            {game.icon}
            <span className="font-medium">{game.name}</span>
            <span className="text-xs text-green-400">{game.cost}</span>
          </button>)}
      </div>
    </div>;
};