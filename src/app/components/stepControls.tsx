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
    <div className=' border-t-2 border-b-2 border-grey left-0 flex justify-between p-5 py-2 w-screen'>
      {linkBack !== undefined && <Button text="Anterior" clickProcess={tucky} choosen={ddd} />}
      {linkNext !== undefined && <Button text="Siguiente" clickProcess={tucky} choosen={ddd} disable={!completed}/>}
    </div>
  );
};

export default StepControls;