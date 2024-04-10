"use client"
import 'tailwindcss/tailwind.css';
import { useEffect } from 'react';
import { useAppContext } from '../context';

export default function Ordenes() {
  const { storage, setStorage } = useAppContext();

  useEffect(() => {
    setStorage(prevState => ({
      ...prevState,
      reserving: false
    }));
    return () => {
      setStorage(prevState => ({
        ...prevState,
        reserving: true
      }));
    };
  }, []);

  return (
    <main>
      <h1>ordenes</h1>
      <h1>{storage.order.name}</h1>
    </main>
  );
}
