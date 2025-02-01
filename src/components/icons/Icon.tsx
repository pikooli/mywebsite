'use client';
import { useState } from 'react';
import {
  useFloating,
  useHover,
  useFocus,
  useInteractions,
  useClick,
  useDismiss,
} from '@floating-ui/react';

export const Icon = ({ name, icon }: { name: string; icon: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    placement: 'top',
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const hover = useHover(context, {
    enabled:
      typeof window !== 'undefined' &&
      window?.matchMedia('(hover: hover)').matches,
  });
  const focus = useFocus(context);
  const click = useClick(context);
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    click,
    dismiss,
  ]);

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <div>
      <i
        ref={refs.setReference}
        className={`${icon} text-2xl`}
        title={name}
        aria-label={`${name} icon`}
        onTouchStart={handleTouchStart}
        {...getReferenceProps()}
      ></i>
      {isOpen ? (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm shadow-md"
          {...getFloatingProps()}
        >
          {name}
        </div>
      ) : null}
    </div>
  );
};
