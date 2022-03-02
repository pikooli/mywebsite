import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  href?: string;
  className?: string;
  iconClassName?: string;
};

const GithubIcon: React.FC<Props> = ({ href, className, iconClassName }) => {
  return (
    <a href={href} className={className} target="tab">
      <FontAwesomeIcon icon={["fab", "github"]} className={iconClassName} />
    </a>
  );
};

export default GithubIcon;
