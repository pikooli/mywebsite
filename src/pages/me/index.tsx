'use client';
import Link from 'next/link';
// import Iam from 'src/pages/me/Iam';
import GithubIcon from 'src/components/icon/Github';

const projects = [
  {
    name: 'Push-Party',
    icon: '🎉',
    description:
      'A fun interactive web game that uses hand tracking to let you push and interact with 3D objects in a virtual space, build with NextJS and mediapipe',
    link: 'https://push-party.vercel.app/',
    github: 'https://github.com/pikooli/Push-Party',
  },
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
    description: 'A tool to calculate the price of a mortgage, in Svelte',
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
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-wrap items-center gap-12 mb-12">
        {/* <Iam /> */}
        <h1 className="text-4xl font-bold capitalize">in progress...</h1>
      </div>
      <h1 className="text-2xl font-bold mb-6">Some of my side project: </h1>
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
