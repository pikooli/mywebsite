import Link from 'next/link';

export const CERTIFICATIONS = [
  {
    name: 'threejs-journey - by Bruno Simon',
    icon: 'devicon-threejs-original colored',
    link: 'https://threejs-journey.com/certificate/view/21505',
  },
];

export const Certification = () => {
  return (
    <section className="panel p-6 md:p-8 flex flex-col gap-6">
      <h1 className="section-title">Certifications</h1>
      <div className="flex flex-col gap-3">
        {CERTIFICATIONS.map(certification => (
          <Link
            key={certification.name}
            href={certification.link}
            target="_blank"
            className="group flex items-center gap-4 rounded-xl border border-line bg-white/[0.02] p-4 transition-colors hover:border-accent/60"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#f4f1ea]">
              <i className={`${certification.icon} text-2xl`} />
            </span>
            <p className="font-body capitalize text-sm leading-6 text-foreground/90 group-hover:text-foreground">
              {certification.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};
