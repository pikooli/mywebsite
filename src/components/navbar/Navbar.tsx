'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="p-2 px-4 navbar">
      <div className="flex text-white justify-between items-center">
        <Link href="/">
          <h1 className="font-title text-xl md:text-2xl font-bold uppercase">
            Pascal Zhang
          </h1>
        </Link>
      </div>
    </div>
  );
}
