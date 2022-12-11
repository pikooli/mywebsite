import { useRouter } from "next/router";
import { Link } from "components/link";

export default function NavLink() {
  const router = useRouter();
  const active = { [router.pathname as string]: "active" };

  const Project42 = () => {
    return (
      <>
        <li>
          <a className="nav-link">42 Projects</a>
        </li>
        <li className="pl-2">
          <Link
            href="/ft_linear_regression"
            text="Ft_linear_regression"
            className={`nav-link ${active["/ft_linear_regression"]}`}
          />
        </li>
      </>
    );
  };

  const Web3 = () => {
    return (
      <>
        <hr className="text-white" />
        <li>
          <a className="nav-link">Web3</a>
        </li>
        <li className="pl-2">
          <Link
            href="/ethereum"
            text="Ethereum"
            className={`nav-link ${active["/ethereum"]}`}
          />
        </li>
      </>
    );
  };

  const PixiJS = () => {
    return (
      <>
        <hr className="text-white" />
        <li>
          <a className="nav-link">PixiJs</a>
        </li>
        <li className="pl-2">
          <Link
            href="/bunny-game"
            text="Bunny-game"
            className={`nav-link ${active["/bunny-game"]}`}
          />
        </li>
        <li className="pl-2">
          <Link
            href="/la_belle_aurore"
            text="La_belle_aurore"
            className={`nav-link ${active["/la_belle_aurore"]}`}
          />
        </li>
      </>
    );
  };

  const TreeJs = () => {
    return (
      <>
        <hr className="text-white" />
        <li>
          <a className="nav-link">Treejs</a>
        </li>
        <li className="pl-2">
          <Link
            href="/treejs"
            text="What is Treejs?"
            className={`nav-link ${active["/treejs"]}`}
          />
        </li>
        <li className="pl-2">
          <Link
            href="/treejs/cube"
            text="Cube"
            className={`nav-link ${active["/treejs/cube"]}`}
          />
        </li>
        <li className="pl-2">
          <Link
            href="/treejs/earth"
            text="Earth"
            className={`nav-link ${active["/treejs/earth"]}`}
          />
        </li>
        <li className="pl-2">
          <Link
            href="/treejs/galaxy"
            text="Galaxy"
            className={`nav-link ${active["/treejs/galaxy"]}`}
          />
        </li>
      </>
    );
  };

  const Games = () => {
    return (
      <>
        <hr className="text-white" />
        <li>
          <a className="nav-link">Games</a>
        </li>
        <li className="pl-2">
          <Link
            href="/drum-kit"
            text="Drum-kit"
            className={`nav-link ${active["/drum-kit"]}`}
          />
        </li>
      </>
    );
  };

  return (
    <ul className="mb-2 mb-lg-0">
      <Project42 />
      <Web3 />
      <PixiJS />
      <TreeJs />
      <Games />
    </ul>
  );
}
