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

export const Presentation = () => {
  return (
    <>
      <div className="flex">
        <Image src="/pascal.png" alt="me" width={150} height={150} />
        <ul className="grid grid-cols-2 gap-2 m-3">
          <li>
            <Link href="https://github.com/pikooli" target="tab">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/zhang-pascal/" target="tab">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </li>
          <li>
            <Link href="https://medium.com/@zhangpascal" target="tab">
              <FontAwesomeIcon icon={faMedium} />
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/@TheWorldOfPikl" target="tab">
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/thefitpikl//" target="tab">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </li>
          <li>
            <JsConfetie />
          </li>
        </ul>
      </div>
      <div className="border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
        <p className="font-body">
          I am a fullstack web developer specializing in JS and TS based at
          Paris. With experience in both corporate and private projects, I focus
          on creating efficient, scalable solutions while maintaining high
          standards of quality and user experience.
          <span className="flex font-body">
            Been part of the
            <Image
              src="/42.png"
              alt="me"
              width={24}
              height={24}
              className="bg-white mx-2 w-auto h-auto"
            />
            school
          </span>
        </p>
        <p className="font-body"> Founded : </p>
        <ul>
          <li>
            <Link href="https://www.homea.tech/" target="tab" className="text-blue-600 hover:text-blue-800">Homea</Link> in 2025, a next-generation AI for the real estate space.
          </li>
          <li>
            <Link href="https://www.alicetales.com/" target="tab" className="text-blue-600 hover:text-blue-800">Alice Tales</Link> in 2025, a platform for parents to find activities for their children.
          </li>
        </ul>
      </div>
    </>
  );
};
