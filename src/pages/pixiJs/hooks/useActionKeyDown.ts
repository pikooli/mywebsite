import { useCallback, useEffect } from 'react';
import { KEY_ACTION } from '../utils';
import { ActionKey } from '../types';

interface UseActionKeydown {
  setAction: (action: string) => void;
}

export function useActionKeydown(props: UseActionKeydown) {
  const { setAction } = props;

  const keydown = useCallback(
    (e: KeyboardEvent) => {
      const keyAction = KEY_ACTION[e.code as ActionKey];

      if (keyAction) {
        e.preventDefault();
        setAction(keyAction);
      }
    },
    [setAction]
  );

  useEffect(() => {
    window.document.addEventListener('keydown', keydown);
    return () => {
      window.removeEventListener('keydown', keydown);
    };
  }, []);

  return {
    setAction,
  };
}
