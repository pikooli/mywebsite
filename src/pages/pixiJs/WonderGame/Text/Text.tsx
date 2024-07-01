import { useEffect, useState, useRef, useContext } from 'react';
import { styleContainer, styleName, styleText } from './Text.style';
import { contextdefaultValue } from 'src/pages/pixiJs/WonderGame/context/';
import { GameContext } from 'src/pages/pixiJs/WonderGame/context';
import { useSpeech } from '../actions';

const TEXT_SPEED = 50;
const TEXT_PAUSE = 1000;

export const Text = () => {
  const contextValue = useContext(GameContext);
  const {
    wonder: { setParameters },
    text: { name, text },
    setText,
  } = contextValue;
  const [displayText, setDisplayText] = useState('');
  const refP = useRef<HTMLParagraphElement>(null);
  const refDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (text) {
      if (displayText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[prev.length]);
          if (refP.current && refDiv.current)
            refDiv.current.scroll({ top: refP.current.scrollHeight });
        }, TEXT_SPEED);
      } else {
        timeout = setTimeout(() => {
          setText?.(contextdefaultValue.text);
          setDisplayText('');
          setParameters(prev => ({ ...prev, action: '' }));
        }, TEXT_PAUSE);
      }
      return () => {
        if (timeout) {
          clearTimeout(timeout);
        }
      };
    }
  }, [displayText, text]);

  useSpeech();

  if (!text) {
    return null;
  }

  return (
    <div style={styleContainer}>
      {name && <p style={styleName}>{name}</p>}
      <div style={styleText} ref={refDiv}>
        <p ref={refP}>{displayText}</p>
      </div>
    </div>
  );
};
