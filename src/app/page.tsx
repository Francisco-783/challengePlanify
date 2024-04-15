"use client"
import 'tailwindcss/tailwind.css';
import { useAppContext } from '@/app/context/index';
import StepControls from './components/stepControls';
import { useEffect, useState } from 'react';
import services from "./simulatedAPI/services.json"
import { FaMinus, FaPlus  } from "react-icons/fa";
import Button from './components/button';

type ServiceItem = {
  id: number;
  name: string;
  description: string;
  category: string;
};

type OrganizedService = {
  category: string;
  items: ServiceItem[];
  id: number;
};



export default function Home() {
  const { storage, setStorage } = useAppContext(); 
  const [selected, setSelected] = useState(9999999)
  const [organizedS, setOrganizedS] = useState<OrganizedService[]>([]);

  const organizeService = () => {
    const newOrganizedS: OrganizedService[] = [];
    services.services.forEach(service => {
      const existingCategoryIndex = newOrganizedS.findIndex(item => item.category === service.category);
    
      if (existingCategoryIndex !== -1) {
        newOrganizedS[existingCategoryIndex].items.push(service);
      } else {
        newOrganizedS.push({ category: service.category, items: [service], id:newOrganizedS.length});
      }
    });
    setOrganizedS(newOrganizedS);

  }

    const handleChangeService = (service:ServiceItem) => {

    const updatedStorage = {
      ...storage, 
      order: {
        ...storage.order, 
        category: service.category,
        id: service.id,
        name: service.name
      }
    };
    setStorage(updatedStorage);
  };

  const changeSelected = (id:number) => {
    const cateSelected = selected === id ? 99999 : id
    setSelected(cateSelected)
  }

  useEffect(() => {
    organizeService();
    const updatedStorage = {
      ...storage, 
      progress: 1,
      reserving: true
    };
    setStorage(updatedStorage);

  }, []);

  return (
    <main className='flex flex-col h-full justify-between items-center '>
      <div className='border-2 border-grey w-11/12 mt-1 p-4 max-w-3xl'>
        <h1>Categorias</h1>
        {organizedS.length > 0 &&
          organizedS.map(cateItem => (
            <div key={cateItem.category}> 
              <div onClick={() => changeSelected(cateItem.id)} className='bg-gray-100 px-2 rounded-sm my-4 flex justify-between items-center'>
                <h3 >{cateItem.category}</h3>
                {selected === cateItem.id ? <FaMinus/> :<FaPlus />}  
              </div>

              {selected === cateItem.id && cateItem.items.map(service => (
                <div key={service.id} className='border-2 border-grey mt-1 px-2 py-1'>
                  <h2 className='pb-1'>{service.name}</h2>
                  <p className='pb-1'>{service.description}</p>
                  <div className='flex justify-end'>
                    <Button text='Seleccionar' clickProcess={() =>handleChangeService(service)} choosen={service.name === storage.order.name ? true : false}/>
                  </div>
                  </div>
              ))}
            </div>
          ))
        }
      </div>
      <StepControls linkNext="/horarios" completed={storage.order.name === "" ? false : true} />
    </main>
  );
}