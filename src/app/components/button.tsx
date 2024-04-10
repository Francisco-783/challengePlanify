"use client"
import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

interface ButtonProps {
  text: string;
  onClick: () => void;
  choosen?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, choosen }) => {
  const [isChoosen, setIsChoosen] = useState(choosen || false);

  useEffect(() => {
    setIsChoosen(choosen || false);
  }, [choosen]);

  return (
    <div>
      <button
        className={`hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-sm ${isChoosen ? 'bg-gray-600' : 'bg-gray-400'}`}
        onClick={() => {
          setIsChoosen(prevChoosen => !prevChoosen);
          onClick();
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;