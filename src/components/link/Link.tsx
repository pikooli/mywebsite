import { useState } from 'react';
import Link from 'next/link';
import PopperJs from 'src/lib/popperjs';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
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
  passHref?: boolean;
}

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
  passHref,
}: Props) => {
  const [showToolTip, setShowToolTip] = useState(false);
  const [refElement, setRefElement] = useState<HTMLAnchorElement | null>(null);
  const onMouseEnter = () => {
    setShowToolTip(prev => true);
  };
  const onMouseLeave = () => {
    setShowToolTip(prev => false);
  };
  return (
    <Link
      href={href || ''}
      passHref={passHref}
      target={target}
      data-cy={datacy}
      ref={setRefElement}
      className={`${className || ''}`}
      style={disabled ? style : undefined}
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
    </Link>
  );
};

export default CustomLink;

const style = {
  color: 'rgba(255, 255, 255, 0.25) !important',
  cursor: 'default',
  pointerEvents: 'none' as 'none',
};
