import { useRouter } from 'next/router';
import { Link } from 'src/components/link';

export default function NavLink() {
  const router = useRouter();
  const active = { [router.pathname]: 'active' };

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
            className={`nav-link ${active['/ft_linear_regression']}`}
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
            className={`nav-link ${active['/ethereum']}`}
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
            className={`nav-link ${active['/bunny-game']}`}
          />
        </li>
        <li className="pl-2">
          <Link
            href="/wonder_game"
            text="Wonder_game"
            className={`nav-link ${active['/wonder_game']}`}
          />
        </li>
        <li className="pl-2">
          <Link
            href="/puyopuyo"
            text="Puyopuyo"
            className={`nav-link ${active['/puyopuyo']}`}
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
            className={`nav-link ${active['/treejs']}`}
          />
        </li>
        <li className="pl-2">
          <Link
            href="/treejs/portal"
            text="Portal"
            className={`nav-link ${active['/treejs/portal']}`}
          />
        </li>
        <li className="pl-2">
          <Link
            href="/treejs/cube"
            text="Cube"
            className={`nav-link ${active['/treejs/cube']}`}
          />
        </li>
        <li className="pl-2">
          <Link
            href="/treejs/earth"
            text="Earth"
            className={`nav-link ${active['/treejs/earth']}`}
          />
        </li>
        <li className="pl-2">
          <Link
            href="/treejs/galaxy"
            text="Galaxy"
            className={`nav-link ${active['/treejs/galaxy']}`}
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
            className={`nav-link ${active['/drum-kit']}`}
          />
        </li>
      </>
    );
  };

  const Svelte = () => {
    return (
      <>
        <hr className="text-white" />
        <li>
          <a className="nav-link">Svelte</a>
        </li>
        <li className="pl-2">
          <Link
            href="/svelte"
            text="Svelte"
            className={`nav-link ${active['/svelte']}`}
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
      <Svelte />
    </ul>
  );
}
