import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppContext from '@/context/AppContext';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { DARK_THEME, LIGHT_THEME } from '@/constants';

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
                  checked={theme === DARK_THEME}
                  onChange={changeTheme}
                />
                <div className="block bg-gray-600 w-8 h-4 rounded-full"></div>
                <div
                  className={`absolute top-[0.05px] bg-white w-4 h-4 rounded-full transition ${
                    theme === DARK_THEME ? 'translate-x-full' : ''
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
      prev === LIGHT_THEME ? DARK_THEME : LIGHT_THEME
    );
  };

  return (
    <div className="p-2 px-4 navbar">
      <div className="flex text-white">
        <Link href="/" className="text-2xl uppercase">
          Pascal Zhang
        </Link>
        <NavbarTools changeTheme={changeTheme} theme={theme} />
      </div>
    </div>
  );
}
