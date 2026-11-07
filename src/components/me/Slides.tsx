import Link from 'next/link';

const SLIDES = [
  {
    name: 'Le MCP, expliqué avec un annuaire téléphonique',
    icon: '📞',
    link: 'https://pikooli.github.io/slide/mcp/index.html#1',
  },
  {
    name: 'La FAQ propulsée par Notion',
    icon: '📚',
    link: 'https://pikooli.github.io/slide/notion-support/index.html#1',
  },
];

export const Slides = () => (
  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {SLIDES.map(slide => (
      <li key={slide.link}>
        <Link
          href={slide.link}
          target="_blank"
          rel="noopener noreferrer"
          className="panel group p-6 flex items-center gap-5 h-full hover:-translate-y-1"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-3xl transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105">
            {slide.icon}
          </div>
          <h3 className="flex-1 font-title font-semibold text-lg leading-snug text-foreground group-hover:text-accent transition-colors">
            {slide.name}
          </h3>
          <span
            aria-hidden
            className="text-accent opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            ↗
          </span>
        </Link>
      </li>
    ))}
  </ul>
);
