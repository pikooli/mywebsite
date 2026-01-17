import Link from 'next/link';

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
    company: 'Homea',
    position: 'Founder',
    period: 'November 2025 - Present',
    location: 'Paris, Île-de-France, France',
    description:
      'Building a next-generation AI for the real estate space',
    achievements: [
    ],
    link: 'https://www.homea.tech/',
  },
  {
    company: 'AliceTales',
    position: 'Founder',
    period: 'September 2025 - Paused',
    location: 'Paris, Île-de-France, France',
    description:
      'At Alice tales, we strive to provide meaningful moments for parents and their children.',
    achievements: [
    ],
    link: 'https://www.alicetales.com/',
  },
  {
    company: 'Lemrock',
    position: 'Full Stack Web Developer',
    period: 'October 2025 - November 2025',
    location: 'Paris, Île-de-France, France',
    description:
      'Worked for a startup in chatbot advertising, contributing across frontend, backend, AI agent',
    achievements: [
      "Redesigned the entire frontend for better performance and maintainability",
"Migrated the frontend codebase from JavaScript to TypeScript",
"Set up linting, formatting, and style tools to ensure consistent code quality",
"Integrated a global state management system to streamline data flow across the chatbot",
"Researched, proposed, and implemented a new UI for the chatbot",
"Added a chatbot tooling carousel within the chat interface",
"Developed backend services to retrieve and index publishers’ articles via Algolia, add it as a tools for agent AI",
"Contributed to the implementation of a new AI agent using LangGraph",
"Advocated best practices and mentored junior developers",
"Improve tracking system"
    ],
    link: 'https://lemrock.com/',
  },
  {
    company: 'Finny',
    position: 'Full Stack Web Developer',
    period: 'January 2025 - July 2025',
    location: 'Paris, Île-de-France, France',
    description:
      'Worked for a financial company, contributing across frontend, backend.',
    achievements: [
      'Designed and implemented a complete email campaign analytics dashboard, including backend data aggregation and frontend data visualization.',
      'Added a rich text editor with formatting and editing capabilities to configure email and message content dynamically.',
      'Built an interactive onboarding tutorial workflow to guide new users through key features and improve initial engagement.',
      'Developed and implemented password reset functionality to enhance user account security.',
      'Set up and integrated a global state management system to optimize application state handling and improve performance.',
      'Enhanced user experience (UX) and improved user interface (UI) consistency across the platform to streamline campaign creation and tracking.',
      'Diagnosed and resolved issues across the stack, ensuring smooth functionality and performance on both frontend and backend components.',
    ],
    link: 'https://www.finnyai.com/',
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
    link: 'https://embleema.com/',
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
    link: 'https://qare.fr/',
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
    link: 'https://www.igocreate.com/',
  },
];

export const Experience = () => {
  return (
    <div className="flex flex-col gap-2 border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300 ">
      <h1 className="font-title text-2xl font-bold mb-6">Experience</h1>
      {EXPERIENCE.map(experience => (
        <div
          key={experience.company}
          className="w-full mb-6 last:mb-0 border-t-2 border-t-gray-200 pt-4"
        >
          {experience.link ? <Link href={experience.link || ''} target="_blank" className="hover:underline">
          <h2 className="font-title text-xl font-semibold text-blue-600 mb-2">
            {experience.company}
          </h2>
          </Link> : 
          <h2 className="font-title text-xl font-semibold  mb-2">
            {experience.company}
          </h2>}
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
