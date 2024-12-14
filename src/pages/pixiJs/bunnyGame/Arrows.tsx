import { useEffect, useRef } from 'react';

import Image from 'next/image';

const Arrow = ({ setArrowDown }: { setArrowDown: Function }) => {
  const div = useRef<null | HTMLDivElement>(null);

  const preventMenu = (e: MouseEvent) => {
    e.preventDefault();
    return false;
  };

  useEffect(() => {
    div.current?.addEventListener('contextmenu', preventMenu, true);
    return () => div.current?.removeEventListener('contextmenu', preventMenu);
  }, []);

  return (
    <div
      className="flex flex-col items-center"
      ref={div}
    >
      <Image
        src="/bunny/arrow.png"
        alt="arrowUp"
        width={64}
        height={64}
        className="rotate-180"
        onTouchStart={e => {
          setArrowDown((prev: string) => 'ArrowUp');
        }}
        onTouchEnd={e => {
          setArrowDown((prev: string) => '');
        }}
        onMouseDown={() => setArrowDown((prev: string) => 'ArrowUp')}
        onMouseUp={() => setArrowDown((prev: string) => '')}
      />
      <div className="grid grid-cols-3">
        <Image
          src="/bunny/arrow.png"
          alt="arrowLeft"
          width={64}
          height={64}
          className="rotate-90"
          onTouchStart={e => {
            setArrowDown((prev: string) => 'ArrowLeft');
          }}
          onTouchEnd={e => {
            setArrowDown((prev: string) => '');
          }}
          onMouseDown={() => setArrowDown((prev: string) => 'ArrowLeft')}
          onMouseUp={() => setArrowDown((prev: string) => '')}
        />
        <Image
          src="/bunny/arrow.png"
          alt="arrowDown"
          width={64}
          height={64}
          onTouchStart={e => {
            setArrowDown((prev: string) => 'ArrowDown');
          }}
          onTouchEnd={e => {
            setArrowDown((prev: string) => '');
          }}
          onMouseDown={() => setArrowDown((prev: string) => 'ArrowDown')}
          onMouseUp={() => setArrowDown((prev: string) => '')}
        />
        <Image
          src="/bunny/arrow.png"
          alt="arrowRight"
          width={64}
          height={64}
          className="-rotate-90"
          onTouchStart={e => {
            setArrowDown((prev: string) => 'ArrowRight');
          }}
          onTouchEnd={e => {
            setArrowDown((prev: string) => '');
          }}
          onMouseDown={() => setArrowDown((prev: string) => 'ArrowRight')}
          onMouseUp={() => setArrowDown((prev: string) => '')}
        />
      </div>
    </div>
  );
};

export default Arrow;
