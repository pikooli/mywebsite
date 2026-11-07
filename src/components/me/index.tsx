'use client';
import { Presentation } from '@/components/me/Presentation';
import { Projects } from '@/components/me/Project';
import { Tech } from '@/components/me/Tech';
import { Certification } from '@/components/me/Certification';
import { Experience } from '@/components/me/Experience';
import { Slides } from '@/components/me/Slides';

export const Me = () => {
  return (
    <main className="max-w-5xl mx-auto px-5 py-10 md:py-16 flex flex-col gap-6">
      <Presentation />
      <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-6">
        <Tech />
        <Certification />
      </div>
      <Experience />
      <section className="flex flex-col gap-6 mt-6">
        <h1 className="section-title">Some of my side project: </h1>
        <Projects />
      </section>
      <section className="flex flex-col gap-6 mt-6">
        <h1 className="section-title">Slides</h1>
        <Slides />
      </section>
    </main>
  );
};
