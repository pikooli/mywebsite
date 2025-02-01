'use client';
import { useContext } from 'react';
import AppContext from '@/context/AppContext';
import Navbar from '@/components/navbar/Navbar';
import { Me } from '@/components/me';

export default function Home() {
  const value = useContext(AppContext);

  return (
    <>
      <Navbar />
      <div className={`${value?.theme}`}>
        <Me />
      </div>
    </>
  );
}
