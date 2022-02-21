import { useRouter } from "next/router";
import { Link } from "components/link";

export default function Sidebar() {
  const router = useRouter();

  const slug = router.pathname.split("/")[2];
  const active = { [slug as string]: "active" };

  const DesktopSize = () => {
    return (
      <div className="d-md-none text-center">
        <Link
          href="/ft_linear_regression"
          text="ft_linear_regression"
          className={`nav-link ${active["manuals"]}`}
        />
      </div>
    );
  };

  return (
    <div className="sidenavbar">
      <DesktopSize />
    </div>
  );
}
