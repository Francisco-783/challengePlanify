"use client"
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import { useAppContext } from '../context';
import StepControls from '../components/stepControls';
import slots from "../simulatedAPI/slots.json";
import Button from '../components/button';
import Link from 'next/link';


interface AvailableSlots {
  date: string;
  availableTimeslots: string[];
}

export default function Horarios() {
  const { storage, setStorage } = useAppContext();
  const [organizedDates, setOrganizedDates] = useState<AvailableSlots>({ date: "", availableTimeslots: [] });
  const selected = " bg-gray-500 text-white"

  const handleChange = (time:string, date:string) => {
    const updatedStorage = {
      ...storage, 
      order: {
        ...storage.order, 
        date: date,
        time: time
      }
    };
    setStorage(updatedStorage);
  }

  useEffect(() => {
    if (slots.date) {
      const date = new Date(slots.date);
      const day = date.getDate();
      const month = date.toLocaleString('es', { month: 'long' });
      const dateText = `${day} de ${month}`;
      setOrganizedDates({...organizedDates,  date:dateText, availableTimeslots: slots.availableTimeslots});
    }
    const updatedStorage = {
      ...storage, 
      progress: 2,
      reserving: true
    };
    setStorage(updatedStorage);
  }, [slots.date]);

  return (
    <main className='flex flex-col h-full justify-between items-center'>
      <div className='border-2 border-grey w-11/12 mt-1 p-4 max-w-3xl rounded'>
        {storage.order.id === 0 ? (
          <>
            <h1 className='pb-1'>Servicio no seleccionado</h1>
            <p className='bg-green-300 rounded p-0.5 mb-2.5'>Se necesita volver a la pagina de seleccion de servicio</p>
            <Link href={"/"}><Button text='Volver'/></Link>
          </>
        ) : (
          <>
            <h1 >Proximos turnos disponibles</h1>
            <h1 className='my-3'>{organizedDates.date}</h1>
            <div className="grid grid-cols-2 gap-4">
              {organizedDates.availableTimeslots.map((time, index) => (
                <button
                  key={index}
                  className={`bg-gray-300 hover:bg-gray-500 hover:text-white font-medium py-2 px-4 rounded transition-all ${storage.order.time === time ? selected : ''}`}
                  onClick={() => handleChange(time, organizedDates.date)}
                >
                  {time}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      <StepControls linkBack={"/"} linkNext="/confirmar" completed={storage.order.time === "" ? false : true} />
    </main>
  );
}