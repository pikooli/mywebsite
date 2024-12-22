import React, { useContext } from 'react';
import { Link } from 'src/components/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppContext from 'src/context/AppContext';
import NavLink from 'src/components/navbar/NavLink';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const BtnMobile = ({ open }: { open: boolean }) => {
  return (
    <Disclosure.Button className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
      <span className="sr-only">Open main menu</span>
      {open ? (
        <XIcon className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
      )}
    </Disclosure.Button>
  );
};

const NavbarTools = ({
  changeTheme,
  theme,
  open,
}: {
  changeTheme: React.ChangeEventHandler<HTMLInputElement>;
  theme?: string;
  open: boolean;
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
      <li>
        <BtnMobile open={open} />
      </li>
    </ul>
  );
};

const CollapseNavbar = ({ open }: { open: boolean }) => {
  return (
    <div className={`lg:hidden ${open ? 'block' : 'hidden'}`} id="mobile-menu">
      <NavLink />
    </div>
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
    <Disclosure as="nav" className="navbar text-white py-3">
      {({ open }) => (
        <div className="px-2">
          <div className="flex ">
            <Link href="/" text="Pascal Zhang" className="text-2xl uppercase" />
            <NavbarTools changeTheme={changeTheme} theme={theme} open={open} />
          </div>
          <CollapseNavbar open={open} />
        </div>
      )}
    </Disclosure>
  );
}
