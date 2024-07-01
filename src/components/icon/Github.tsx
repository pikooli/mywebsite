import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface Props {
  href?: string;
  className?: string;
  iconClassName?: string;
}

const GithubIcon: React.FC<Props> = ({
  href,
  className,
  iconClassName,
}: Props) => {
  return (
    <a href={href} className={className} target="tab">
      <FontAwesomeIcon icon={faGithub} className={iconClassName} />
    </a>
  );
};

export default GithubIcon;
