'use client';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
// import Iam from 'src/pages/me/Iam';
import GithubIcon from 'src/components/icon/Github';

const Cat = dynamic(
  async () => await import('src/pages/me/Cat').then(mod => mod.Cat),
  {
    ssr: false,
  }
);

const projects = [
  {
    name: 'WipeIt',
    icon: '👋',
    description:
      'WipeIt is an interactive web-based cleaning game, Nextjs and mediapipe',
    link: 'https://wipeit.vercel.app/',
    github: 'https://github.com/pikooli/hand/tree/main/example/wipeIt',
  },
  {
    name: 'DoodlAI',
    icon: '🎨',
    description: 'A game to draw with AI, built with React and TransformerJS',
    link: 'https://huggingface.co/spaces/pikooli/DoodlAI',
    github: 'https://github.com/pikooli/DoodlAI',
  },
  {
    name: 'Calcule-immo',
    icon: '🏢',
    description: 'A tool to calculate the price of a mortgage, in NextJS',
    link: 'https://calcule-immo.com/',
    github: 'https://github.com/pikooli/calcule-immo',
  },
  {
    name: 'LetterIntention',
    icon: '✉️',
    description: 'A tool to write a letter, with Svelte',
    link: 'https://www.letterintention.com/',
    github: 'https://github.com/pikooli/loi',
  },
];

const Me = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex flex-wrap items-center gap-12 mb-12">
        <div className="relative group">
          <Suspense fallback={null}>
            <Canvas>
              <OrbitControls makeDefault />
              <ambientLight intensity={3} />
              <Cat />
            </Canvas>
          </Suspense>
        </div>
        {/* <Iam /> */}
        <h1 className="text-4xl font-bold capitalize">in progress...</h1>
      </div>

      <ul className="space-y-6">
        {projects.map((project, index) => (
          <li
            key={index}
            className="group border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="p-6 flex items-center gap-6">
              <div className="text-4xl">{project.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Link
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-semibold text-lg group-hover:underline"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3>{project.name}</h3>
                  </Link>
                  <GithubIcon
                    href={project.github}
                    className="text-gray-700 hover:text-gray-90 transition-colors"
                    iconClassName="text-xl"
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Me;
