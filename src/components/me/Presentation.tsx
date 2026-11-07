import { JsConfetie } from '@/components/JsConfetie';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

const SOCIALS = [
  { href: 'https://github.com/pikooli', icon: faGithub, label: 'GitHub' },
  {
    href: 'https://www.linkedin.com/in/zhang-pascal/',
    icon: faLinkedin,
    label: 'LinkedIn',
  },
  { href: 'https://medium.com/@zhangpascal', icon: faMedium, label: 'Medium' },
  {
    href: 'https://www.youtube.com/@TheWorldOfPikl',
    icon: faYoutube,
    label: 'YouTube',
  },
  {
    href: 'https://www.instagram.com/thefitpikl//',
    icon: faInstagram,
    label: 'Instagram',
  },
];

const socialClass =
  'flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/[0.03] text-foreground/80 transition-all duration-200 hover:border-accent hover:text-accent hover:-translate-y-0.5';

export const Presentation = () => {
  return (
    <section className="panel overflow-hidden p-6 md:p-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative flex flex-col md:flex-row gap-8 md:gap-10 md:items-start">
        <div className="flex md:flex-col items-center gap-5 shrink-0">
          <div className="shrink-0 rounded-2xl p-[3px] bg-gradient-to-br from-accent via-accent/30 to-transparent">
            <Image
              src="/pascal.png"
              alt="me"
              width={150}
              height={150}
              className="rounded-[14px] bg-surface w-28 h-28 md:w-36 md:h-36 object-cover"
            />
          </div>
          <ul className="flex flex-wrap md:justify-center gap-2 md:max-w-[9.5rem]">
            {SOCIALS.map(social => (
              <li key={social.href}>
                <Link
                  href={social.href}
                  target="tab"
                  aria-label={social.label}
                  className={socialClass}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </Link>
              </li>
            ))}
            <li className={`${socialClass} cursor-pointer`}>
              <JsConfetie />
            </li>
          </ul>
        </div>

        <div className="flex-1 flex flex-col gap-5 text-[1.05rem] leading-8 text-foreground/90">
          <p className="font-body">
            I am a fullstack web developer specializing in JS and TS based at
            Paris. With experience in both corporate and private projects, I
            focus on creating efficient, scalable solutions while maintaining
            high standards of quality and user experience.
            <span className="flex items-center font-body mt-3 text-muted">
              Been part of the
              <Image
                src="/42.png"
                alt="me"
                width={24}
                height={24}
                className="bg-white mx-2 w-auto h-6 rounded p-0.5"
              />
              school
            </span>
          </p>
          <div className="border-t border-line pt-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted mb-3">
              {' '}
              Founded :{' '}
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="https://www.homea.tech/"
                  target="tab"
                  className="accent-link font-medium"
                >
                  Homea
                </Link>{' '}
                in 2025, a next-generation AI for the real estate space.
              </li>
              <li>
                <Link
                  href="https://www.alicetales.com/"
                  target="tab"
                  className="accent-link font-medium"
                >
                  Alice Tales
                </Link>{' '}
                in 2025, a platform for parents to find activities for their
                children.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
