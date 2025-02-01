'use client';
import { Presentation } from '@/components/me/Presentation';
import { Projects } from '@/components/me/Project';
import { Tech } from '@/components/me/Tech';
import { Certification } from '@/components/me/Certification';

export const Me = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 grid grid-cols-1 gap-4">
      <Presentation />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Tech />
        <Certification />
      </div>
      <h1 className="text-2xl font-bold mb-6">Some of my side project: </h1>
      <Projects />
    </div>
  );
};
