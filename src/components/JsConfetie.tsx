'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import JSConfetti from 'js-confetti';
import Confetti from 'react-confetti';

export const JsConfetie = () => {
  const jsConfettiRef = useRef<JSConfetti | null>(null);
  const [numberOfPieces, setNumberOfPieces] = useState(0);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setHeight(document.documentElement.scrollHeight);
    setWidth(document.documentElement.scrollWidth);
    const jsConfetti = new JSConfetti();
    jsConfettiRef.current = jsConfetti;
  }, []);

  const triggerConfetti = useCallback(() => {
    jsConfettiRef.current?.addConfetti();
    setNumberOfPieces(200);
    setTimeout(() => {
      setNumberOfPieces(0);
    }, 10000);
  }, [jsConfettiRef]);

  return (
    <>
      <button onClick={triggerConfetti}>🎉</button>
      <Confetti width={width} height={height} numberOfPieces={numberOfPieces} />
    </>
  );
};
