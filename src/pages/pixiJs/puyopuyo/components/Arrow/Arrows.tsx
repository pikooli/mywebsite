import { useEffect, useRef, useCallback } from 'react';
import * as eventKey from './eventKey';
import Image from 'next/image';

function simulateKeyPress(event: KeyboardEvent) {
  document.dispatchEvent(event);
}

export function Arrows() {
  const divRef = useRef<null | HTMLDivElement>(null);

  const preventMenu = useCallback((e: MouseEvent) => {
    e.preventDefault();
    return false;
  }, []);

  useEffect(() => {
    divRef.current?.addEventListener('contextmenu', preventMenu, true);
    return () =>
      divRef.current?.removeEventListener('contextmenu', preventMenu);
  }, [preventMenu]);

  return (
    <div
      className="ml-auto mt-3 mr-auto sm:mt-0 sm:ml-3 flex flex-col items-center"
      ref={divRef}
    >
      <Image
        src="/bunny/arrow.png"
        alt="arrow"
        width={64}
        height={64}
        className="arrowup rotate-180"
        onTouchStart={e => {
          simulateKeyPress(eventKey.eventArrowUp);
        }}
        onMouseDown={() => {
          simulateKeyPress(eventKey.eventArrowUp);
        }}
      />
      <div className="grid grid-cols-3">
        <Image
          src="/bunny/arrow.png"
          alt="arrowLeft"
          width={64}
          height={64}
          className="rotate-90"
          onTouchStart={e => {
            simulateKeyPress(eventKey.eventArrowLeft);
          }}
          onMouseDown={() => {
            simulateKeyPress(eventKey.eventArrowLeft);
          }}
        />
        <Image
          src="/bunny/arrow.png"
          alt="arrowDown"
          width={64}
          height={64}
          onTouchStart={e => {
            simulateKeyPress(eventKey.eventArrowDown);
          }}
          onMouseDown={() => {
            simulateKeyPress(eventKey.eventArrowDown);
          }}
        />
        <Image
          src="/bunny/arrow.png"
          alt="arrowRight"
          width={64}
          height={64}
          className="-rotate-90"
          onTouchStart={e => {
            simulateKeyPress(eventKey.eventArrowRight);
          }}
          onMouseDown={() => {
            simulateKeyPress(eventKey.eventArrowRight);
          }}
        />
      </div>
      <div className="text-center mt-3">
        <span
          className="p-5 border m-3"
          onTouchStart={() => {
            simulateKeyPress(eventKey.eventArrowA);
          }}
          onMouseDown={() => {
            simulateKeyPress(eventKey.eventArrowA);
          }}
        >
          A
        </span>
        <span
          className="p-5 border m-3"
          onTouchStart={() => {
            simulateKeyPress(eventKey.eventArrowZ);
          }}
          onMouseDown={() => {
            simulateKeyPress(eventKey.eventArrowZ);
          }}
        >
          Z
        </span>
      </div>
    </div>
  );
}
