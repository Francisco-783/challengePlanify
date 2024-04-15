"use client"
import React from 'react';
import { useAppContext } from '../context';
import 'tailwindcss/tailwind.css';


const ProgressBar = () => {
  const { storage } = useAppContext();
  let textBar = "Barra de Progreso"
  // Function to calculate the width of the progress bar based on the value of storage.progress
  const calculateWidth = () => {
    switch (storage.progress) {
      case 1:
        textBar = "Seleccionar servicio"
        return '20%';
      case 2:
        textBar = "Seleccionar horario"
        return '65%';
      case 3:
        textBar = "Confirmar turno"
        return '85%';
      default:
        textBar = "Turnos reservados"
        return '100%';
    }
  };

  // Dynamic style for the progress bar
  const progressBarStyle = {
    width: calculateWidth(),
    background: '#1aae9f',
    transition: 'width 0.5s ease-in-out',
  };

  return (
    <div className=" w-11/12 mt-4 mb-4  max-w-3xl">
      <p className="text-sm mb-1 font-bold text-gray-800">{textBar}</p>
      <div className="bg-gray-200 h-4 rounded overflow-hidden">
        <div style={progressBarStyle} className="h-full"></div>
      </div>
    </div>
  );
};

export default ProgressBar;