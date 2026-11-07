'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="max-w-5xl mx-auto h-full px-5 flex justify-between items-center">
        <Link href="/" className="group flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_4px_var(--accent-soft)] transition-transform duration-300 group-hover:scale-125" />
          <h1 className="font-title text-lg md:text-xl font-semibold tracking-tight">
            Pascal Zhang
          </h1>
        </Link>
      </div>
    </div>
  );
}
