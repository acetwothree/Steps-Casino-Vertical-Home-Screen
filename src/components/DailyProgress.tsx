import React from 'react';
import { FootprintsIcon, CoinsIcon, TrendingUpIcon, AwardIcon } from 'lucide-react';
export const DailyProgress = () => {
  // These would come from your app's state management
  const dailySteps = 6842;
  const dailyGoal = 10000;
  const progress = dailySteps / dailyGoal * 100;
  const todaysEarnings = {
    steps: 6842,
    gambling: 392
  };
  return <div className="space-y-4 p-4">
      {/* Daily Steps Progress */}
      <div className="bg-gray-800 rounded-xl p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <FootprintsIcon className="w-5 h-5 text-blue-400" />
              Today's Steps
            </h2>
            <span className="text-3xl font-bold text-white">{dailySteps}</span>
          </div>
          <div className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300">
            Goal: {dailyGoal}
          </div>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div className="bg-blue-400 h-3 rounded-full transition-all duration-500" style={{
          width: `${progress}%`
        }} />
        </div>
        <div className="mt-2 text-sm text-gray-400">
          {dailyGoal - dailySteps} steps to reach daily goal
        </div>
      </div>
      {/* Today's Earnings */}
      <div className="bg-gray-800 rounded-xl p-4">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
          <AwardIcon className="w-5 h-5 text-green-400" />
          Today's Earnings
        </h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FootprintsIcon className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">From Steps</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-medium">
                +{todaysEarnings.steps}
              </span>
              <CoinsIcon className="w-4 h-4 text-green-400" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <TrendingUpIcon className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300">From Games</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-medium">
                +{todaysEarnings.gambling}
              </span>
              <CoinsIcon className="w-4 h-4 text-green-400" />
            </div>
          </div>
          <div className="pt-2 border-t border-gray-700">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Total Today</span>
              <div className="flex items-center gap-2">
                <span className="text-white font-medium">
                  +{todaysEarnings.steps + todaysEarnings.gambling}
                </span>
                <CoinsIcon className="w-4 h-4 text-green-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};