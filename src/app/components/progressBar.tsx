"use client"
import React from 'react';
import { useAppContext } from '../context';


const ProgressBar = () => {
  const { storage } = useAppContext();
  console.log(storage.progress)
  return (
    <div >
      {/* This contains the progress bar for the ordering process"*/}
      {storage.progress}
    </div>
  );
};

export default ProgressBar;