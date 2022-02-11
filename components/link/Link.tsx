import { useState } from "react";
import Link from "next/link";
import PopperJs from "lib/popperjs";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  href?: string;
  className?: string;
  disabled?: boolean;
  text?: string;
  icon?: IconProp;
  iconClassName?: string;
  children?: React.ReactNode;
  toolTipText?: string;
  toolTipPosition?: string;
  datacy?: string;
  target?: string;
};

const CustomLink: React.FC<Props> = ({
  href,
  text,
  className,
  disabled,
  icon,
  iconClassName,
  children,
  toolTipText,
  toolTipPosition,
  datacy,
  target,
}) => {
  const [showToolTip, setShowToolTip] = useState(false);
  const [refElement, setRefElement] = useState<HTMLAnchorElement | null>(null);
  const onMouseEnter = () => setShowToolTip((prev) => true);
  const onMouseLeave = () => setShowToolTip((prev) => false);

  return (
    <Link href={href || ""}>
      <a
        target={target}
        data-cy={datacy}
        ref={setRefElement}
        className={`${className || ""} link  ${disabled ? "disabled" : ""}`}
        onMouseEnter={toolTipText ? onMouseEnter : undefined}
        onMouseLeave={toolTipText ? onMouseLeave : undefined}
      >
        {children}
        {text && text}
        {icon && <FontAwesomeIcon icon={icon} className={iconClassName} />}
        {toolTipText && showToolTip ? (
          <PopperJs
            refElement={refElement}
            toolTipText={toolTipText}
            position={toolTipPosition}
          />
        ) : null}
      </a>
    </Link>
  );
};

export default CustomLink;
