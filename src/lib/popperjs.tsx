import React, { useState } from "react";
import { usePopper } from "react-popper";

type Props = {
  refElement: HTMLElement | null;
  toolTipText?: string;
  position?: string;
  className?: string;
};

const Popperjs: React.FC<Props> = ({
  refElement,
  position,
  toolTipText,
  className,
}) => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const options: Obj = {
    modifiers: [
      { name: "arrow", options: { element: arrowElement } },
      { name: "offset", options: { offset: [0, 10] } },
    ],
  };
  if (position) {
    options.placement = position;
  }
  const { styles, attributes } = usePopper(refElement, popperElement, options);

  return (
    <div
      ref={setPopperElement}
      style={styles.popper}
      className={`popperjs ${className || ""}`}
      {...attributes.popper}
    >
      <div className="popperjs-content">{toolTipText || "test"}</div>
      <div ref={setArrowElement} style={styles.arrow} />
    </div>
  );
};

export default Popperjs;
