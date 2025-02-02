'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <div className="p-2 px-4 navbar">
      <div className="flex text-white justify-between">
        <Link href="/">
          <h1 className="font-title font-bold uppercase">Pascal Zhang</h1>
        </Link>
        <a href="mailto:zhangpas@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          Contact me
        </a>
      </div>
    </div>
  );
}
