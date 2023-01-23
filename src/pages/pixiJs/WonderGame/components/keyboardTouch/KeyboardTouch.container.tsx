import { useKeyboardTouch } from './KeyboardTouch.hook';
import { KeyboardTouchView } from './KeyboardTouch.view';

export function KeyboardTouch() {
  const keyboardTouchHook = useKeyboardTouch();

  return <KeyboardTouchView {...keyboardTouchHook} />;
}
