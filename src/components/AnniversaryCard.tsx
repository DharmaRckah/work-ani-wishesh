import React, { useEffect, useState } from 'react';
import { Quote } from './Quote';
import { AnimatedText } from './AnimatedText';
import { CakeIcon, TrophyIcon, StarIcon, HeartIcon } from 'lucide-react';
export const AnniversaryCard = () => {
  const [activeQuote, setActiveQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const quotes = ['Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.', 'The future belongs to those who believe in the beauty of their dreams.', 'The best way to predict the future is to create it.', 'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.'];
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveQuote(prev => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return <div className={`w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-1000 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
      {/* Top banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-16 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <StarIcon className="text-yellow-300 animate-pulse" size={24} />
          <h2 className="text-white text-xl font-bold">WORK ANNIVERSARY</h2>
          <StarIcon className="text-yellow-300 animate-pulse" size={24} />
        </div>
      </div>
      {/* Main content */}
      <div className="p-6 md:p-8">
        <div className="flex flex-col items-center">
          {/* Trophy icon with animation */}
          <div className="mb-6 relative">
            <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-20 animate-ping"></div>
            <div className="relative p-4 bg-yellow-100 rounded-full">
              <TrophyIcon size={64} className="text-yellow-600" />
            </div>
          </div>
          {/* Anniversary message */}
          <AnimatedText text="Congratulations!" className="text-4xl md:text-5xl font-bold text-blue-600 mb-2" delay={100} />
          <AnimatedText text="Surykant Sinhasane" className="text-2xl md:text-3xl font-bold text-gray-800 mb-2" delay={300} />
          <div className="flex items-center mb-4 mt-1">
            <div className="h-0.5 w-12 bg-gray-300"></div>
            <HeartIcon size={20} className="text-red-500 mx-2 animate-pulse" />
            <div className="h-0.5 w-12 bg-gray-300"></div>
          </div>
          <AnimatedText text="on your Work Anniversary at" className="text-xl text-gray-600 mb-1" delay={500} />
          <AnimatedText text="Agnito Technologies" className="text-2xl font-semibold text-purple-700 mb-6" delay={700} />
          <div className="flex items-center mb-8">
            <CakeIcon size={20} className="text-pink-500 mr-2" />
            <span className="text-gray-700">
              Time flies when you're doing what you love!
            </span>
          </div>
          {/* Quote section */}
          <div className="w-full">
            <Quote text={quotes[activeQuote]} />
          </div>
          {/* Footer */}
          <div className="mt-8 text-center text-gray-600">
            <p>Your dedication and hard work inspire us all.</p>
            <p className="mt-2">Here's to many more successful years ahead! </p>
            <p className='ml-62'>~dharma</p>
          </div>
        </div>
      </div>
    </div>;
};