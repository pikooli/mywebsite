import Link from 'next/link';
import Image from 'next/image';
import Iam from 'src/pages/me/Iam';
import GithubIcon from 'src/components/icon/Github';

const projects = [
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
          <Image
            src="/cat.png"
            className="rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105"
            width={300}
            height={300}
            alt="cat"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <Iam />
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
