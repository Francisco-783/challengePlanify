"use client"
import 'tailwindcss/tailwind.css';
import { useAppContext } from '../context';

export default function Horarios() {
  const { storage, setStorage } = useAppContext();
  return (
    <main >
      <h1 >Horarios</h1>
      <h1 >{storage.order.name}</h1>
    </main>
  );
}
