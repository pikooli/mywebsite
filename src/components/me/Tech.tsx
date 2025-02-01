import { Icon } from '@/components/icons/Icon';

const Languages = [
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'Go', icon: 'devicon-go-plain colored' },
];

const FRONTEND_TECH = [
  { name: 'ReactJS', icon: 'devicon-react-original colored' },
  { name: 'React Native', icon: 'devicon-react-original colored' },
  { name: 'Svelte', icon: 'devicon-svelte-plain colored' },
  { name: 'SvelteKit', icon: 'devicon-svelte-plain colored' },
  { name: 'NextJS', icon: 'devicon-nextjs-plain colored' },
  { name: 'Tailwind', icon: 'devicon-tailwindcss-plain colored' },
  { name: 'Threejs', icon: 'devicon-threejs-original colored' },
  { name: 'Redux', icon: 'devicon-redux-original colored' },
  { name: 'Redux Saga', icon: 'devicon-redux-original colored' },
  { name: 'Zustand', icon: 'devicon-react-original colored' },
];

const BACKEND_TECH = [
  { name: 'NodeJS', icon: 'devicon-nodejs-plain colored' },
  { name: 'NestJS', icon: 'devicon-nestjs-plain colored' },
  { name: 'Express', icon: 'devicon-express-original colored' },
  { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
  { name: 'GraphQL', icon: 'devicon-graphql-plain colored' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
  { name: 'MariaDB', icon: 'devicon-mariadb-plain colored' },
  { name: 'Prisma', icon: 'devicon-prisma-plain colored' },
];

const TOOLS = [
  { name: 'Jest', icon: 'devicon-jest-plain colored' },
  { name: 'Mocha', icon: 'devicon-mocha-plain colored' },
  { name: 'Cypress', icon: 'devicon-cypressio-plain colored' },
  { name: 'Android Studio', icon: 'devicon-androidstudio-plain colored' },
  { name: 'Docker', icon: 'devicon-docker-plain colored' },
  { name: 'Kubernetes', icon: 'devicon-kubernetes-plain colored' },
  { name: 'GitHub', icon: 'devicon-github-plain colored' },
  { name: 'GitLab', icon: 'devicon-gitlab-plain colored' },
];

// const TECH_STACK = [...FRONTEND_TECH, ...BACKEND_TECH, ...TOOLS];

export const Tech = () => {
  return (
    <div className="flex flex-col gap-2 border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
      <h1 className="text-2xl font-bold mb-6">Tech Stack</h1>
      <div className="flex flex-wrap flex-col gap-2 bg-gray-100 p-4 rounded-md">
        <div className="flex flex-wrap gap-2">
          {Languages.map(lang => (
            <Icon key={lang.name} name={lang.name} icon={lang.icon} />
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {FRONTEND_TECH.map(tech => (
            <Icon key={tech.name} name={tech.name} icon={tech.icon} />
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {BACKEND_TECH.map(tech => (
            <Icon key={tech.name} name={tech.name} icon={tech.icon} />
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {TOOLS.map(tech => (
            <Icon key={tech.name} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};
