import { useCallback, useEffect } from 'react';
import { KEY_ACTION } from '../utils';
import { ActionKey } from '../types';

interface UseActionKeydown {
  setAction(action: string): void;
}

export function useActionKeydown(props: UseActionKeydown) {
  const { setAction } = props;

  const keydown = useCallback(
    (e: KeyboardEvent) => {
      const key_action = KEY_ACTION[e.code as ActionKey];

      if (key_action) {
        e.preventDefault();
        return setAction(key_action);
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
