import Link from 'next/link';
import { GithubIcon } from '@/components/icons/Github';

const PROJECTS = [
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
    link: 'https://calcule-immo-s9ot.vercel.app/',
    github: 'https://github.com/pikooli/calcule-immo',
  },
  {
    name: 'LetterIntention',
    icon: '✉️',
    description: 'A tool to write a letter, with Svelte',
    link: 'https://loi-nine.vercel.app/',
    github: 'https://github.com/pikooli/loi',
  },
];

export const Projects = () => (
  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {PROJECTS.map(project => (
      <li
        key={project.name}
        className="panel group p-6 flex gap-5 hover:-translate-y-1"
      >
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-3xl transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105">
          {project.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-3 mb-2">
            <Link
              className="inline-flex items-center gap-2 font-semibold text-lg text-foreground hover:text-accent transition-colors"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="font-title">{project.name}</h3>
              <span aria-hidden className="text-accent text-sm opacity-60">
                ↗
              </span>
            </Link>
            <GithubIcon
              href={project.github}
              className="text-muted hover:text-foreground transition-colors"
              iconClassName="text-xl"
            />
          </div>
          <p className="font-body text-[0.95rem] leading-7 text-foreground/70">
            {project.description}
          </p>
        </div>
      </li>
    ))}
  </ul>
);
