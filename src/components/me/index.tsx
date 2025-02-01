'use client';
import Image from 'next/image';
import { Projects } from '@/components/me/Project';

export const Me = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-wrap items-center gap-12 mb-12">
        <Image src="/pascal.png" alt="me" width={100} height={100} />
        <div className="border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
          <p className="">
            I am a fullstack web developer specializing in JS and TS based at
            Paris. With experience in both corporate and private projects, I
            focus on creating efficient, scalable solutions while maintaining
            high standards of quality and user experience.
          </p>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-6">Some of my side project: </h1>
      <Projects />
    </div>
  );
};
