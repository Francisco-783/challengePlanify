import React from 'react';
import Button from './button';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';



interface StepControlsProps {
  linkBack?: string;
  linkNext?: string;
  completed: boolean;
  isEnd?: () => void;
}

const StepControls: React.FC<StepControlsProps> = ({ linkBack, linkNext, completed, isEnd }) => {

  return (
<div className='border-t-2 border-b-2 border-grey flex justify-between items-center w-screen'>
    <div className='left-0 flex justify-between items-center p-5 py-2 w-screen max-w-3xl mx-auto'>
      {linkBack !== undefined && <Link href={linkBack}><Button text="Anterior" /></Link>}
      <div className="flex justify-end flex-grow lg:ml-10"> 
        {isEnd === undefined ? (
          linkNext !== undefined && <Link href={completed ? linkNext : '#'} className=''><Button text="Siguiente" disable={!completed} /></Link>
        ) : (
          <Link href={"/ordenes"}><Button clickProcess={()=> {isEnd()}} text="Confirmar" /></Link> 
        )}
      </div>
    </div>
</div>
  );
};

export default StepControls;