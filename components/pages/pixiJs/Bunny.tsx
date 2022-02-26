import { useEffect, useState } from "react";
import { Stage, Sprite, Container } from "@inlet/react-pixi";

const KEY: { [key: string]: { x: number; y: number } } = {
  ArrowUp: { x: 0, y: -5 },
  ArrowDown: { x: 0, y: 5 },
  ArrowLeft: { x: -5, y: 0 },
  ArrowRight: { x: 5, y: 0 },
};

const Bunny = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    window.document.addEventListener("keydown", (e) => {
      const move = KEY[e.key];
      if (move)
        setPosition((prev) => ({ x: prev.x + move.x, y: prev.y + move.y }));
    });
  }, []);

  return (
    <Stage width={300} height={300} options={{ backgroundAlpha: 0 }}>
      <Container x={150} y={150}>
        <Sprite image="/IaUrttj.png" {...{ x: position.x, y: position.y }} />
      </Container>
    </Stage>
  );
};

export default Bunny;
