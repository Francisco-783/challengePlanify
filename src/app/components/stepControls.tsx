import React from 'react';
import Button from './button';
import 'tailwindcss/tailwind.css';



interface StepControlsProps {
  linkBack?: string;
  linkNext?: string;
  completed: boolean;
}

const StepControls: React.FC<StepControlsProps> = ({ linkBack, linkNext, completed }) => {
  let ddd = false
  const tucky = () => {ddd = !ddd; console.log(ddd)}
  return (
    <div className=''>
      {linkBack !== undefined && <Button text="Anterior" clickProcess={tucky} choosen={ddd} />}
      {linkNext !== undefined && <Button text="Siguiente" clickProcess={tucky} choosen={ddd} disable={!completed}/>}
    </div>
  );
};

export default StepControls;