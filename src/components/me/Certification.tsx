export const CERTIFICATIONS = [
  {
    name: 'threejs-journey',
    icon: 'devicon-threejs-original colored',
    link: 'https://threejs-journey.com/certificate/view/21505',
  },
];

export const Certification = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Certifications</h1>
      <div className="flex gap-2 flex-wrap justify-center items-center bg-gray-100 p-4 rounded-md">
        {CERTIFICATIONS.map(certification => (
          <a key={certification.name} href={certification.link}>
            <i className={certification.icon}></i>
          </a>
        ))}
      </div>
    </>
  );
};
