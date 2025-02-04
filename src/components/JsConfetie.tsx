'use client';
import { useEffect, useRef, useState } from 'react';
import JSConfetti from 'js-confetti';
import Confetti from 'react-confetti';

export const JsConfetie = () => {
  const jsConfettiRef = useRef<JSConfetti | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setHeight(document.documentElement.scrollHeight);
    setWidth(document.documentElement.scrollWidth);
    const jsConfetti = new JSConfetti();
    jsConfettiRef.current = jsConfetti;
  }, []);

  useEffect(() => {
    if (isOpen) {
      jsConfettiRef.current?.addConfetti();
    }
    setTimeout(() => {
      setIsOpen(false);
    }, 10000);
  }, [isOpen]);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>🎉</button>
      {isOpen && <Confetti width={width} height={height} />}
    </>
  );
};
