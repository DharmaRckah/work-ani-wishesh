import React from 'react';
import { QuoteIcon } from 'lucide-react';
export const Quote = ({
  text
}) => {
  return <div className="bg-blue-50 rounded-xl p-5 relative">
      <QuoteIcon size={24} className="text-blue-300 absolute top-3 left-3 opacity-50" />
      <p className="text-gray-700 italic text-center px-6 py-2">"{text}"</p>
    </div>;
};