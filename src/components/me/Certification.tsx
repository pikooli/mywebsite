export const CERTIFICATIONS = [
  {
    name: 'threejs-journey - by Bruno Simon',
    icon: 'devicon-threejs-original colored',
    link: 'https://threejs-journey.com/certificate/view/21505',
  },
];

export const Certification = () => {
  return (
    <div className="flex flex-col gap-2 border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
      <h1 className="font-title text-2xl font-bold mb-6">Certifications</h1>
      <div className="flex gap-2 flex-wrap bg-gray-100 p-4 rounded-md">
        {CERTIFICATIONS.map(certification => (
          <a
            key={certification.name}
            href={certification.link}
            target="_blank"
            className="flex items-center"
          >
            <i
              className={`${certification.icon} text-2xl mr-2 flex item-center`}
            />
            <p className="font-body text-black capitalize text-sm">
              {certification.name}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};
