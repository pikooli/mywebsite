import React, { useContext } from "react";
import { Link } from "components/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppContext from "components/AppContext";

export default function Navbar() {
  const value = useContext(AppContext);

  const changeTheme = () => {
    value?.setTheme((prev: string) =>
      prev === "theme-light" ? "theme-dark" : "theme-light"
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link
          href="/"
          text="Pascal Zhang"
          className="navbar-brand text-uppercase"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                href="/ft_linear_regression"
                text="ft_linear_regression"
                className="nav-link"
              />
            </li>
          </ul>
          <ul className="navbar-nav flex-row">
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
              <a
                href="https://github.com/pikooli"
                className="nav-link"
                target="tab"
              >
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
            <li className="nav-item pe-2">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  onChange={changeTheme}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  Checked switch checkbox input
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
