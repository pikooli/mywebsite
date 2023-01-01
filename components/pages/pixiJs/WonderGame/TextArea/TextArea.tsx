import { useEffect, useState, useRef } from "react";
import { styleContainer, styleName, styleText } from "./TextArea.style";
import { useContext } from "react";
import { GameContext } from "components/pages/pixiJs/WonderGame/context";
interface TextAreaProps {
  text: string;
  name?: string;
}

const TEXT_SPEED = 50;

export const TextArea = (props: TextAreaProps) => {
  const { text, name } = props;
  const [displayText, setDisplayText] = useState("");
  const refP = useRef<HTMLParagraphElement>(null);
  const refDiv = useRef<HTMLDivElement>(null);

  if (!text) {
    return null;
  }
  const value = useContext(GameContext);

  useEffect(() => {
    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[prev.length]);
        if (refP.current && refDiv.current)
          refDiv.current.scroll({ top: refP.current.scrollHeight });
      }, TEXT_SPEED);
      return () => {
        timeout ? clearTimeout(timeout) : null;
      };
    }
  }, [displayText]);

  return (
    <div style={styleContainer}>
      {name && <p style={styleName}>{name}</p>}
      <div style={styleText} ref={refDiv}>
        <p ref={refP}>{displayText}</p>
      </div>
    </div>
  );
};
