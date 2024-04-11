"use client"
import 'tailwindcss/tailwind.css';
import { useAppContext } from '@/app/context/index';
import Link from 'next/link';
import StepControls from './components/stepControls';

export default function Home() {
  const { storage, setStorage } = useAppContext(); 

  const handleChangeName = () => {

    const updatedStorage = {
      ...storage, 
      order: {
        ...storage.order, 
        name: 'Jose' 
      }
    };

   
    setStorage(updatedStorage);
  };
  return (
    <main className='flex flex-col h-full justify-between'>
      <div>
      <h1 >Challenge Planify {storage.order.name}</h1>
      <button onClick={handleChangeName}>CAMBIO</button>
      <Link href={"/horarios"}>DSASDASD</Link>
      </div>
      <StepControls linkBack="" linkNext="" completed={false} />
    </main>
  );
}
