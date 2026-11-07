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

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  icon: string;
}

export const Icon = ({ name, icon, ...props }: IconProps) => {
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
    <div {...props} className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#f4f1ea] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_-6px_rgba(255,138,76,0.5)]">
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
          className="z-50 bg-[#0d0e11] text-foreground border border-line rounded-md px-2 py-0.5 text-xs font-mono shadow-lg whitespace-nowrap"
          {...getFloatingProps()}
        >
          {name}
        </div>
      ) : null}
    </div>
  );
};
