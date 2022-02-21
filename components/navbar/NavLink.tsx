import { useRouter } from "next/router";
import { Link } from "components/link";

export default function NavLink() {
  const router = useRouter();

  const slug = router.pathname.split("/")[2];
  const active = { [slug as string]: "active" };

  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link disabled fw-bold">42 Projects</a>
      </li>
      <li className="nav-item ps-2">
        <Link
          href="/ft_linear_regression"
          text="ft_linear_regression"
          className={`nav-link ${active["manuals"]}`}
        />
      </li>
    </ul>
  );
}
