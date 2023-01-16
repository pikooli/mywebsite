import { useCallback, useEffect, useState } from 'react';
import { KEY_ACTION } from '../utils';

export function useActionKeydown() {
  const [action, setAction] = useState('');

  const keydown = useCallback((e: KeyboardEvent) => {
    const key_action = KEY_ACTION[e.code];

    if (key_action) {
      console.log('key_action', key_action);
      return setAction(prev => key_action);
    }
  }, []);

  useEffect(() => {
    window.document.addEventListener('keydown', keydown);
    return () => {
      window.removeEventListener('keydown', keydown);
    };
  }, []);

  return {
    action,
    setAction,
  };
}
