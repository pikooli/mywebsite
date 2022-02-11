import { Link } from "components/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link
          href="/"
          text="Pascal Zhang"
          className="navbar-brand text-uppercase"
        />
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
        </div>
      </div>
    </nav>
  );
}
