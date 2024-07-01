import { useCallback, useEffect, useRef } from 'react';
import { KeyboardKey } from '../../../types';

export function useKeyboardTouch() {
  const divRef = useRef<null | HTMLDivElement>(null);

  const preventMenu = useCallback((e: MouseEvent) => {
    e.preventDefault();
    return false;
  }, []);

  const pressKey = useCallback((keyboardTouch: KeyboardKey) => {
    const event = new KeyboardEvent('keydown', {
      key: keyboardTouch,
      code: keyboardTouch,
    });
    document.dispatchEvent(event);
  }, []);

  useEffect(() => {
    divRef.current?.addEventListener('contextmenu', preventMenu, true);
    return () =>
      divRef.current?.removeEventListener('contextmenu', preventMenu);
  }, []);

  return { pressKey, divRef };
}
