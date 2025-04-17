import React, { useEffect, useState } from 'react';
import { AnniversaryCard } from './components/AnniversaryCard';
import { Confetti } from './components/Confetti';
export function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => {
    // Start confetti after a short delay
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return <div className="flex w-full min-h-screen justify-center items-center bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 p-4">
      {showConfetti && <Confetti />}
      <AnniversaryCard />
    </div>;
}