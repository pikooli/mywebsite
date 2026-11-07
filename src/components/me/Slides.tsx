import Link from 'next/link';

const SLIDES = [
  {
    name: 'Le MCP, expliqué avec un annuaire téléphonique',
    link: 'https://pikooli.github.io/slide/mcp/index.html#1',
  },
  {
    name: 'La FAQ propulsée par Notion',
    link: 'https://pikooli.github.io/slide/notion-support/index.html#1',
  },
  {
    name: "L'IA agentique, expliquée simplement",
    link: 'https://pikooli.github.io/slide/agentic-ai/#1',
  },
];

export const Slides = () => (
  <section className="panel px-5 py-4 md:px-6 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
    <h1 className="font-mono text-xs uppercase tracking-[0.18em] text-muted md:pt-[0.4rem] shrink-0">
      Slides
    </h1>
    <ul className="flex-1 flex flex-col divide-y divide-line">
      {SLIDES.map(slide => (
        <li key={slide.link}>
          <Link
            href={slide.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 py-1.5 text-[0.95rem] text-foreground/90 hover:text-accent transition-colors"
          >
            <span className="truncate">{slide.name}</span>
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
  </section>
);
