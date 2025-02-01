import { Icon } from '@/components/icons/Icon';

export const CERTIFICATIONS = [
  {
    name: 'threejs-journey',
    icon: 'devicon-threejs-original colored',
    link: 'https://threejs-journey.com/certificate/view/21505',
  },
];

export const Certification = () => {
  return (
    <div className="flex flex-col gap-2 border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
      <h1 className="text-2xl font-bold mb-6">Certifications</h1>
      <div className="flex gap-2 flex-wrap bg-gray-100 p-4 rounded-md">
        {CERTIFICATIONS.map(certification => (
          <a key={certification.name} href={certification.link} target="_blank">
            <Icon name={certification.name} icon={certification.icon} />
          </a>
        ))}
      </div>
    </div>
  );
};
