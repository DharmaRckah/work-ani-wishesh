import React, { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';
export const Confetti = () => {
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [showConfetti, setShowConfetti] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', handleResize);
    // Reduce confetti over time
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 8000);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);
  return <ReactConfetti width={windowDimension.width} height={windowDimension.height} numberOfPieces={showConfetti ? 200 : 0} recycle={false} colors={['#1e40af', '#7e22ce', '#e11d48', '#fbbf24', '#10b981']} />;
};