"use client"
import React, { useEffect } from 'react';
import { BiSolidCoffee } from "react-icons/bi";
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import { useAppContext } from '../context';



const NavigationBar = () => {
  const { storage} = useAppContext(); 
  const style = "transition-all justify-center flex justify-items-center flex-col"
  const colorStile = "text-purple-600 border-b-4 border-purple-600 outline-0 outline-offset-0 " + style ;

  useEffect(() => {
  }, [storage.reserving]);
  return (
    <div className="bottom-0 left-0 w-full bg-white shadow-md flex justify-evenly py-2">
      <Link href="/" className={storage.reserving === false ? style : colorStile}>
        <BiSolidCoffee className='w-6 h-6 self-center'/>
        <p>Reservar</p>
        <p>{storage.reserving}</p>
      </Link>
      <Link href="/ordenes" className={storage.reserving === false ? colorStile : style}>
        <BiSolidCoffee className='w-6 h-6 self-center'/>
        <p>Mis turnos</p>
      </Link>
      
    </div>
  );
};

export default NavigationBar;