'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <div className="p-2 px-4 navbar">
      <div className="flex text-white justify-between items-center">
        <Link href="/">
          <h1 className="font-title text-xl md:text-2xl font-bold uppercase">
            Pascal Zhang
          </h1>
        </Link>
        <Link href="mailto:zhangpas@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          Contact me
        </Link>
      </div>
    </div>
  );
}
