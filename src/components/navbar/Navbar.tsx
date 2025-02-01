import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="p-2 px-4 navbar">
      <div className="flex text-white">
        <Link href="/" className="text-2xl uppercase">
          Pascal Zhang
        </Link>
      </div>
    </div>
  );
}
