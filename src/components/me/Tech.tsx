const TECH_STACK = [
  { name: 'ReactJS', icon: 'devicon-react-original colored' },
  { name: 'React Native', icon: 'devicon-react-original colored' },
  { name: 'NodeJS', icon: 'devicon-nodejs-plain colored' },
  { name: 'Express', icon: 'devicon-express-original colored' },
  { name: 'NextJS', icon: 'devicon-nextjs-plain colored' },
  { name: 'Tailwind', icon: 'devicon-tailwindcss-plain colored' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
  { name: 'Jest', icon: 'devicon-jest-plain colored' },
  { name: 'Mocha', icon: 'devicon-mocha-plain colored' },
  { name: 'Cypress', icon: 'devicon-cypressio-plain colored' },
  { name: 'Threejs', icon: 'devicon-threejs-original colored' },
  { name: 'GraphQL', icon: 'devicon-graphql-plain colored' },
  { name: 'Android Studio', icon: 'devicon-androidstudio-plain colored' },
  { name: 'Docker', icon: 'devicon-docker-plain colored' },
  { name: 'Kubernetes', icon: 'devicon-kubernetes-plain colored' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
  { name: 'MariaDB', icon: 'devicon-mariadb-plain colored' },
  { name: 'Prisma', icon: 'devicon-prisma-plain colored' },
  { name: 'GitHub', icon: 'devicon-github-plain colored' },
  { name: 'GitLab', icon: 'devicon-gitlab-plain colored' },
];

export const Tech = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Tech Stack</h1>
      <div className="flex gap-2 flex-wrap justify-center items-center bg-gray-100 p-4 rounded-md">
        {TECH_STACK.map(tech => (
          <i
            key={tech.name}
            className={`${tech.icon} text-2xl`}
            title={tech.name}
            aria-label={`${tech.name} icon`}
          ></i>
        ))}
      </div>
    </>
  );
};
