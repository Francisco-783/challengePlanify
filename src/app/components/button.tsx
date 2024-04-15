"use client"
import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

//button component

interface ButtonProps {
  text: string; // defines the button text
  clickProcess?: () => void; //defines the process
  choosen?: boolean; // it change the style of the button to make the hover style stay
  disable?: boolean; // make the button disable
}

const Button: React.FC<ButtonProps> = ({ text, clickProcess, choosen, disable }) => {
  const [isChoosen, setIsChoosen] = useState(choosen || false);

  const style = `hover:bg-gray-700 text-white transition-all font-bold py-1 px-4 rounded ${isChoosen ? 'bg-gray-700' : 'bg-gray-500'}`
  const disStyle = `text-white transition-all font-bold py-1 px-4 rounded bg-gray-300 cursor-not-allowed`

  useEffect(() => {
    setIsChoosen(choosen || false);
  }, [choosen]);

  return (
    <div>
      <button
        className={disable !== true ? style : disStyle}
        onClick={() => {
          if (!disable) {
            setIsChoosen(!isChoosen);
            clickProcess != undefined && clickProcess();
          }
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;