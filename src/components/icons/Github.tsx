import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface Props {
  href: string;
  className?: string;
  iconClassName?: string;
}

export const GithubIcon: React.FC<Props> = ({
  href,
  className,
  iconClassName,
}: Props) => {
  return (
    <Link href={href} className={className} target="tab">
      <FontAwesomeIcon icon={faGithub} className={iconClassName} />
    </Link>
  );
};
