import React from 'react';
import Button from './button';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';



interface StepControlsProps {
  linkBack?: string;
  linkNext?: string;
  completed: boolean;
}

const StepControls: React.FC<StepControlsProps> = ({ linkBack, linkNext, completed }) => {

  return (
<div className='border-t-2 border-b-2 border-grey left-0 flex justify-between items-center p-5 py-2 w-screen'>
  {linkBack !== undefined && <Link href={"linkBack"}><Button text="Anterior" /></Link>}
  <div className="flex justify-end flex-grow">
    {linkNext !== undefined && <Link href={completed ? linkNext : '#'} className=''><Button text="Siguiente" disable={!completed} /></Link>}
  </div>
</div>
  );
};

export default StepControls;