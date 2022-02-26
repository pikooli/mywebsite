import React, { useContext } from "react";
import { Link } from "components/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppContext from "components/AppContext";
import NavLink from "components/navbar/NavLink";

const NavbarTools = ({
  changeTheme,
}: {
  changeTheme: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <ul className="navbar-nav flex-row ms-auto">
      <li className="nav-item pe-2">
        <a
          href="https://www.instagram.com/whitepikl/"
          className="nav-link"
          target="tab"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </a>
      </li>
      <li className="nav-item pe-2">
        <a href="https://github.com/pikooli" className="nav-link" target="tab">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
      </li>
      <li className="nav-item pe-2">
        <a
          href="https://www.linkedin.com/in/zhang-pascal/"
          className="nav-link"
          target="tab"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
      </li>
      <li className="nav-item pe-2 pt-2">
        <div className="d-flex align-items-center">
          <FontAwesomeIcon className="text-white me-2" icon="sun" />
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onChange={changeTheme}
            />
          </div>
          <FontAwesomeIcon className="text-white" icon="moon" />
        </div>
      </li>
      <li>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </li>
    </ul>
  );
};

const CollapseNavbar = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <NavLink />
    </div>
  );
};

export default function Navbar() {
  const value = useContext(AppContext);

  const changeTheme = () => {
    value?.setTheme((prev: string) =>
      prev === "theme-light" ? "theme-dark" : "theme-light"
    );
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link
          href="/"
          text="Pascal Zhang"
          className="navbar-brand text-uppercase"
        />
        <NavbarTools changeTheme={changeTheme} />
        <CollapseNavbar />
      </div>
    </nav>
  );
}
