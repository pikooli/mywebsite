import { useEffect, useState, useRef } from 'react';
import { styleContainer, styleName, styleText } from './Text.style';

interface TextProps {
  text: string;
  name?: string;
}

const TEXT_SPEED = 50;
const TEXT_PAUSE = 1000;

export const Text = (props: TextProps) => {
  const { text, name } = props;
  const [displayText, setDisplayText] = useState('');
  const [haveBeenPlayed, setHaveBeenPlayed] = useState(false);
  const refP = useRef<HTMLParagraphElement>(null);
  const refDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (text && !haveBeenPlayed) {
      if (displayText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[prev.length]);
          if (refP.current && refDiv.current)
            refDiv.current.scroll({ top: refP.current.scrollHeight });
        }, TEXT_SPEED);
      } else {
        timeout = setTimeout(() => {
          setDisplayText('');
          setHaveBeenPlayed(true);
        }, TEXT_PAUSE);
      }
      return () => {
        timeout ? clearTimeout(timeout) : null;
      };
    }
  }, [displayText, text, haveBeenPlayed]);

  useEffect(() => {
    setHaveBeenPlayed(false);
  }, [text]);

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
