import React from 'react';
import { Header } from './components/Header';
import { StepCounter } from './components/StepCounter';
import { GameCategories } from './components/GameCategories';
import { BottomNav } from './components/BottomNav';
export function App() {
  return <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="pb-20">
        <StepCounter />
        <GameCategories />
      </main>
      <BottomNav />
    </div>;
}