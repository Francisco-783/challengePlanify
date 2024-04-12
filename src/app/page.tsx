"use client"
import 'tailwindcss/tailwind.css';
import { useAppContext } from '@/app/context/index';
import Link from 'next/link';
import StepControls from './components/stepControls';
import { useEffect } from 'react';
import services from "./simulatedAPI/services.json"

export default function Home() {
  const { storage, setStorage } = useAppContext(); 
  type ServiceItem = {
    id: number;
    name: string;
    description: string;
    category: string;
  };
  
  type OrganizedService = {
    category: string;
    items: ServiceItem[];
  };
  
  let organizedS: OrganizedService[] = [];

  // const handleChangeName = () => {

  //   const updatedStorage = {
  //     ...storage, 
  //     order: {
  //       ...storage.order, 
  //       name: 'Jose' 
  //     }
  //   };
  //   setStorage(updatedStorage);
  // };
  const organizeService = () => {
    services.services.forEach(service => {
      const existingCategoryIndex = organizedS.findIndex(item => item.category === service.category);
    
      if (existingCategoryIndex !== -1) {
        organizedS[existingCategoryIndex].items.push(service);
      } else {
        organizedS.push({ category: service.category, items: [service] });
      }
    });
    console.log(organizedS)
  }
  useEffect(() => {
    console.log("efect")
    organizeService();
  }, []);
  return (
    <main className='flex flex-col h-full justify-between'>
      <div>
      <h1 >Challenge Planify</h1>
  
      <Link href={"/horarios"}>DSASDASD</Link>
      </div>
      <StepControls linkNext="/horarios" completed={true} />
    </main>
  );
}
