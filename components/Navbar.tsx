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
      </div>
    </nav>
  );
}
