import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="p-2 px-4 navbar">
      <div className="flex text-white justify-between">
        <Link href="/" className="text-2xl uppercase">
          Pascal Zhang
        </Link>
        <a href="mailto:zhangpas@gmail.com">Contact me</a>
      </div>
    </div>
  );
}
