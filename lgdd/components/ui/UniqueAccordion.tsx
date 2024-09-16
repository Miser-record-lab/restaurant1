// components/ui/UniqueAccordion.js
'use client'
import React, { useState } from 'react';

const UniqueAccordion = ({
    question,
    answer,
  }: {
    question: string;
    answer: string;
  }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-4 border-b border-gray-300">
      <button
        className="w-full text-left py-4 focus:outline-none"
        onClick={toggleAccordion}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{question}</h3>
          <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-500 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
        style={{ maxHeight: isOpen ? '500px' : '0' }}
      >
        <p className="py-4 text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

export default UniqueAccordion;
