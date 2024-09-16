// components/ui/RatingCard.js
import React from 'react';

const RatingCard = ({ 
    title, 
    description, 
    }: {
    title: string;
    description: string;
    }) => {
  return (
    <div className="h-auto flex flex-col justify-between p-4 rounded-xl border-slate-600 border-[0.2px] items-center text-auto">
      <div className="flex justify-center mb-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3.75l2.47 4.996 5.487.8-3.973 3.871.937 5.463-4.921-2.587-4.922 2.587.937-5.463-3.973-3.871 5.487-.8L12 3.75z"
            />
          </svg>
        ))}
      </div>
      <h3 className="font-bold text-auto">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};

export default RatingCard;
