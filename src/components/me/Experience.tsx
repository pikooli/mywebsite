export const EXPERIENCE = [
  {
    company: 'Freelance',
    position: 'Full Stack Web Developer',
    period: `January 2021 - Present`,
    location: 'Paris, Île-de-France, France',
    description:
      'I design, develop, and deliver tailored websites and mobile applications, ensuring they align with your specific needs and business goals. From concept to launch, I take your project from zero to one, turning ideas into fully functional digital products.',
    achievements: [
      'Developed an application enabling companies to centralize and manage their guidelines efficiently.',
      'Worked on Shopify-hosted websites, enhancing functionality and user experience.',
      'Built PrestaShop websites and developed custom modules to extend platform capabilities.',
    ],
  },
  {
    company: 'Embleema',
    position: 'Full Stack Web Developer',
    period: 'September 2023 - September 2024',
    location: 'Paris, Île-de-France, France',
    description:
      'Worked for a company collaborating with pharmaceutical groups in America, contributing across frontend, backend, and mobile development.',
    achievements: [
      'Organizing and leading various meetings to align teams and stakeholders.',
      'Onboarding and mentoring new recruits to ensure smooth integration.',
      'Implementing a versioning system for the back-office admin panel to enhance traceability.',
      'Designing and developing a patient follow-up system to automate reminders for the next steps in medical care.',
      'Optimizing, debugging, and maintaining the existing codebase to improve performance and reliability.',
      'Researching and proposing new processes and technologies to enhance efficiency and innovation.',
    ],
  },
  {
    company: 'Qare',
    position: 'Full Stack Web Developer',
    period: 'May 2022 - September 2023',
    location: 'Paris, Île-de-France, France',
    description:
      'Worked as a Fullstack Web Developer for the leading teleconsultation platform for doctors in France, contributing across frontend, backend, and mobile development.',
    achievements: [
      'Organizing and leading meetings to align teams and stakeholders.',
      'Onboarding and mentoring new recruits for smooth integration.',
      'Maintaining and improving the design system using Storybook to ensure consistency.',
      'Developing pixel-perfect user interfaces based on designer specifications.',
      'Improve the a11y of the application',
      'Creating and adapting various email templates for communication and engagement.',
      'Implementing a doctor appointment request system, enhancing patient accessibility.',
      'Leading the migration and integration of a new customer support system.',
      'Researching and introducing new processes and technologies to optimize performance and efficiency.',
    ],
  },
  {
    company: 'Igocreate',
    position: 'Full Stack Web Developer',
    period: 'February 2021 - December 2021',
    location: 'Paris, Île-de-France, France',
    description:
      'Worked as a Fullstack Web Developer in an agency, collaborating with diverse clients across multiple platforms.',
    achievements: [
      'Developed a platform for OFII, adhering to market requirements and CTO directives.',
      'Built a no-code website platform, enabling users to create websites without technical expertise.',
      'Enhanced and optimized the Hermès website, improving performance and user experience.',
      'Contributed to the ferry reservation system, ensuring seamless booking functionality.',
    ],
  },
];

export const Experience = () => {
  return (
    <div className="flex flex-col gap-2 border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
      <h1 className="font-title text-2xl font-bold mb-6">Experience</h1>
      {EXPERIENCE.map(experience => (
        <div
          key={experience.company}
          className="w-full mb-6 last:mb-0 border-t-2 border-t-gray-200 pt-4"
        >
          <h2 className="font-title text-xl font-semibold text-blue-600 mb-2">
            {experience.company}
          </h2>
          <p className="font-body mb-1">{experience.position}</p>
          <p className="font-body text-sm mb-1 capitalize">
            {experience.period}
          </p>
          <p className="font-body text-sm mb-3">{experience.location}</p>
          <p className="font-body mb-3">{experience.description}</p>
          <ul className="list-disc list-inside space-y-1">
            {experience.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
