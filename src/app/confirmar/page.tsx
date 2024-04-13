"use client"
import 'tailwindcss/tailwind.css';
import { useAppContext } from '../context';
import StepControls from '../components/stepControls';
import { useEffect } from 'react';
import Link from 'next/link';
import Button from '../components/button';

export default function Confirmar() {
  const { storage, setStorage } = useAppContext();

  const submitHandler = () =>{
    const updatedStorage = {
      ...storage, 
      order: {
        id: 0, 
        name: "",
        category: "",
        date: "",
        time: "",
      },
      orderList: [...storage.orderList, storage.order]
    };
    setStorage(updatedStorage);

  }

  useEffect(() => {
    if (storage.progress != 3){
    const updatedStorage = {
      ...storage, 
      progress: 3,
      reserving: true
    };
    setStorage(updatedStorage);}
  }, [storage]);
  return (
      <main className='flex flex-col h-full justify-between items-center'>
        <div className='border-2 border-grey w-11/12 mt-1 p-4'>
          {storage.order.id === 0 && storage.order.time === "" ? (
            <>
              <h1 className='pb-1'>Orden no completada</h1>
              <p className='bg-green-300 rounded p-0.5 mb-2.5'>Se necesita volver a la pagina de seleccion de servicio para completar la reserva</p>
              <Link href={"/"}><Button text='Volver'/></Link>
            </>
          ) : (
            <>
                <h3>Servicio: {storage.order.name}</h3>
                <p>Fecha: {storage.order.date} {storage.order.time}</p>
            </>
          )}
        </div>
        <StepControls linkBack={"/horarios"} isEnd={storage.order.id != 0 ? () => submitHandler() : undefined} completed={true} />
      </main>
  );
}