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
      className="text-center ml-auto mt-3 sm:mr-auto sm:mt-0 sm:ml-3"
      ref={div}
    >
      <Image
        src="/bunny/arrow.png"
        width={64}
        height={64}
        className="arrowup"
        onTouchStart={e => {
          setArrowDown((prev: string) => 'ArrowUp');
        }}
        onTouchEnd={e => {
          setArrowDown((prev: string) => '');
        }}
        onMouseDown={() => setArrowDown((prev: string) => 'ArrowUp')}
        onMouseUp={() => setArrowDown((prev: string) => '')}
      />
      <div>
        <Image
          src="/bunny/arrow.png"
          width={64}
          height={64}
          className="arrowleft"
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
          width={64}
          height={64}
          className="arrowdown"
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
          width={64}
          height={64}
          className="arrowright"
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
