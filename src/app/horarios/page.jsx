"use client"
import 'tailwindcss/tailwind.css';
import { useAppContext } from '../context';

export default function Horarios() {
  const { storage, setStorage } = useAppContext();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 >Horarios</h1>
      <h1 >{storage.order.name}</h1>
    </main>
  );
}
