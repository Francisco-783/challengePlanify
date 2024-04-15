"use client"
import 'tailwindcss/tailwind.css';
import { useEffect } from 'react';
import { useAppContext } from '../context';
import Link from 'next/link';
import Button from '../components/button';

//this page show the orders already made

export default function Ordenes() {
  const { storage, setStorage } = useAppContext();

  useEffect(() => {
    setStorage(prevState => ({ //change the progress bar mode and navigationBar mode
      ...prevState,
      progress: 4,
      reserving: false
    }));

  }, []);

  return (
    <main className='flex flex-col h-full justify-between items-center'>
    <div className='border-2 border-grey w-11/12 mt-1 p-4 max-w-3xl rounded'>
      {storage.orderList.length === 0 ? ( //if you never placed an order, this should show
        <>
          <h1 className='pb-1'>Ninguna orden registrada</h1>
          <p className='bg-green-300 rounded p-1 mb-2.5'>Puedes hacer tu primera orden en la seccion "Reservar"</p>
          <Link href={"/"}><Button text='Reservar'/></Link>
        </>
      ) : (
        <>
            {storage.orderList.map(reserva => (
              <div className='border-2 border-grey mt-1 p-4 rounded '>
                <h1>{reserva.name}</h1>
                <h3>Servicio: {reserva.name}</h3>
                <p>Fecha: {reserva.date} {reserva.time}</p>
              </div>
            ))}
        </>
      )}
    </div>
    </main>
  );
}
