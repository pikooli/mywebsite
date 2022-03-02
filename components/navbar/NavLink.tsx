import { useRouter } from "next/router";
import { Link } from "components/link";

export default function NavLink() {
  const router = useRouter();

  const slug = router.pathname.split("/")[1];
  const active = { [slug as string]: "active" };

  const Project42 = () => {
    return (
      <>
        <li className="nav-item">
          <a className="nav-link disabled fw-bold">42 Projects</a>
        </li>
        <li className="nav-item ps-2">
          <Link
            href="/ft_linear_regression"
            text="ft_linear_regression"
            className={`nav-link ${active["ft_linear_regression"]}`}
          />
        </li>
      </>
    );
  };

  const Web3 = () => {
    return (
      <>
        <li className="nav-item">
          <a className="nav-link disabled fw-bold">Web3</a>
        </li>
        <li className="nav-item ps-2">
          <Link
            href="/ethereum"
            text="Ethereum"
            className={`nav-link ${active["ethereum"]}`}
          />
        </li>
      </>
    );
  };

  const Other = () => {
    return (
      <>
        <hr className="text-white" />
        <li className="nav-item">
          <a className="nav-link disabled fw-bold">PixiJs</a>
        </li>
        <li className="nav-item ps-2">
          <Link
            href="/bunny-game"
            text="bunny-game"
            className={`nav-link ${active["bunny-game"]}`}
          />
        </li>
      </>
    );
  };

  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <Project42 />
      <Web3 />
      <Other />
    </ul>
  );
}
