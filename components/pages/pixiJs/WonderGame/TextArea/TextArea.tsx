import { useEffect, useState } from "react";
import { style } from "./TextArea.style";

interface TextAreaProps {
  text: string;
}

export const TextArea = (props: TextAreaProps) => {
  const { text } = props;
  const [displayText, setDisplayText] = useState("");

  if (!text) {
    return null;
  }

  useEffect(() => {
    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[prev.length]);
      }, 500);
      return () => {
        timeout ? clearTimeout(timeout) : null;
      };
    }
  }, [displayText]);

  return <div style={style}>{displayText}</div>;
};
