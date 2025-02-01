import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppContext from '@/context/AppContext';
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const NavbarTools = ({
  changeTheme,
  theme,
}: {
  changeTheme: React.ChangeEventHandler<HTMLInputElement>;
  theme?: string;
}) => {
  return (
    <ul className="flex justify-end items-center grow md:mr-10">
      <li className="ml-2">
        <a href="https://www.instagram.com/whitepikl/" target="tab">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li className="ml-2">
        <a href="https://github.com/pikooli" target="tab">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li className="ml-2">
        <a href="https://www.linkedin.com/in/zhang-pascal/" target="tab">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li className="ml-2">
        <div className="flex items-center">
          <FontAwesomeIcon className="mr-2" icon={faSun} />
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="toggleB"
              className="flex items-center cursor-pointer"
            >
              <div className="relative">
                <input
                  id="toggleB"
                  className="sr-only"
                  type="checkbox"
                  role="switch"
                  checked={theme === 'dark-theme'}
                  onChange={changeTheme}
                />
                <div className="block bg-gray-600 w-8 h-4 rounded-full"></div>
                <div
                  className={`absolute top-[0.05px] bg-white w-4 h-4 rounded-full transition ${
                    theme === 'dark-theme' ? 'translate-x-full' : ''
                  }`}
                ></div>
              </div>
            </label>
          </div>
          <FontAwesomeIcon className="ml-2" icon={faMoon} />
        </div>
      </li>
    </ul>
  );
};

export default function Navbar() {
  const value = useContext(AppContext);
  const theme = value?.theme;

  const changeTheme = () => {
    value?.setTheme((prev: string) =>
      prev === 'light-theme' ? 'dark-theme' : 'light-theme'
    );
  };

  return (
    <div className="p-2 navbar">
      <div className="flex text-white">
        <Link href="/" className="text-2xl uppercase">
          Pascal Zhang
        </Link>
        <NavbarTools changeTheme={changeTheme} theme={theme} />
      </div>
    </div>
  );
}
