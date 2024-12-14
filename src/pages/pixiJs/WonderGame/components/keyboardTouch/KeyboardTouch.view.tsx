import Image from 'next/image';
import { KeyboardKey } from '../../../types';
import {
  ARROW_WIDTH,
  ARROW_HEIGHT,
  SPACEBAR_WIDTH,
  SPACEBAR_HEIGHT,
} from './KeyboardTouch.utils';

interface KeyboardTouchViewProps {
  pressKey: (keyboardTouch: KeyboardKey) => void;
  divRef: React.MutableRefObject<HTMLDivElement | null>;
}

export function KeyboardTouchView(props: KeyboardTouchViewProps) {
  const { pressKey, divRef } = props;

  return (
    <div className="mt-3 flex flex-col items-center" ref={divRef}>
      <Image
        src="/wonderGame/arrow.png"
        alt="arrowUp"
        width={ARROW_WIDTH}
        height={ARROW_HEIGHT}
        className="rotate-180"
        onMouseDown={() => {
          pressKey('ArrowUp');
        }}
      />
      <div className="grid grid-cols-3">
        <Image
          src="/wonderGame/arrow.png"
          alt="arrowLeft"
          width={ARROW_WIDTH}
          height={ARROW_HEIGHT}
          className="rotate-90"
          onMouseDown={() => {
            pressKey('ArrowLeft');
          }}
        />
        <Image
          src="/wonderGame/arrow.png"
          alt="arrowDown"
          width={ARROW_WIDTH}
          height={ARROW_HEIGHT}
          onMouseDown={() => {
            pressKey('ArrowDown');
          }}
        />
        <Image
          src="/wonderGame/arrow.png"
          alt="arrowRight"
          width={ARROW_WIDTH}
          height={ARROW_HEIGHT}
          className="-rotate-90"
          onMouseDown={() => {
            pressKey('ArrowRight');
          }}
        />
      </div>
      <Image
        src="/wonderGame/spacebar.png"
        alt="spacebar"
        width={SPACEBAR_WIDTH}
        height={SPACEBAR_HEIGHT}
        className="space_bar"
        onMouseDown={() => {
          pressKey('Space');
        }}
      />
    </div>
  );
}
