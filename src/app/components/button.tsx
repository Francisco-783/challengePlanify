import React from 'react';

type ButtonProps = {
  text: string;
  onClick: () => void; // Define the type of the function argument
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <div>
      {/* A button*/}
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default Button;