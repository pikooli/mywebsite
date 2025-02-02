import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faYoutube,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';

export const Presentation = () => {
  return (
    <>
      <div className="flex">
        <Image src="/pascal.png" alt="me" width={150} height={150} />
        <ul className="grid grid-cols-2 gap-2 m-3">
          <li>
            <a href="https://github.com/pikooli" target="tab">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/zhang-pascal/" target="tab">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://medium.com/@zhangpascal" target="tab">
              <FontAwesomeIcon icon={faMedium} />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@TheWorldOfPikl" target="tab">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/thefitpikl//" target="tab">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
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
              className="bg-white mx-2"
            />
            school
          </span>
        </p>
      </div>
    </>
  );
};
