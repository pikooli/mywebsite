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
    <div className="text-center mt-3" ref={divRef}>
      <Image
        src="/wonderGame/arrow.png"
        width={ARROW_WIDTH}
        height={ARROW_HEIGHT}
        className="arrowup"
        onMouseDown={() => {
          pressKey('ArrowUp');
        }}
      />
      <div>
        <Image
          src="/wonderGame/arrow.png"
          width={ARROW_WIDTH}
          height={ARROW_HEIGHT}
          className="arrowleft"
          onMouseDown={() => {
            pressKey('ArrowLeft');
          }}
        />
        <Image
          src="/wonderGame/arrow.png"
          width={ARROW_WIDTH}
          height={ARROW_HEIGHT}
          className="arrowdown"
          onMouseDown={() => {
            pressKey('ArrowDown');
          }}
        />
        <Image
          src="/wonderGame/arrow.png"
          width={ARROW_WIDTH}
          height={ARROW_HEIGHT}
          className="arrowright"
          onMouseDown={() => {
            pressKey('ArrowRight');
          }}
        />
      </div>
      <Image
        src="/wonderGame/spacebar.png"
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
