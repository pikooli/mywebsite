import React, { useState, useEffect, useCallback } from "react";
import { Stage, Text } from "@inlet/react-pixi";
import { Texture } from "@pixi/core";
import { TextStyle } from "pixi.js";

import Textures from "components/pixijs/Texture";
import { map, BLOCKSIZE } from "components/pages/pixiJs/bunnyGame/utils";
import Bunny from "components/pages/pixiJs/bunnyGame/Bunny";
import Map from "components/pages/pixiJs/bunnyGame/Map";
import Rock from "components/pages/pixiJs/bunnyGame/Rock";
import Explanation from "components/pages/pixiJs/bunnyGame/Explaination";
import Arrow from "components/pages/pixiJs/bunnyGame/Arrows";

const spritesheet = "/bunny/Bunny.json";

const LIMITUP = 2;
const LIMITRIGHT = map[0].length - 2;
const LIMITDOWN = map.length - 2;

export type Posi = { x: number; y: number };

const BunnyGame = () => {
  const [bunnyPosi, setBunnyPosi] = useState({ x: 0, y: map.length - 1 });
  const [rockPosi, setRockPosi] = useState({ x: 5, y: map.length - 1 });
  const [arrowDow, setArrowDown] = useState("");
  const [score, setScore] = useState(0);

  const randomPosiRock = () => {
    const x = Math.round(Math.random() * LIMITRIGHT);
    const y = Math.round(LIMITUP + Math.random() * LIMITDOWN);
    if (!map[y] || map[y][x] !== 1 || checkCollision(bunnyPosi, { x, y }))
      randomPosiRock();
    else setRockPosi({ x, y });
  };

  const checkCollision = (bunnyPosi: Posi, rockPosi: Posi) => {
    const xdiff = bunnyPosi.x - rockPosi.x;
    const ydiff = bunnyPosi.y - rockPosi.y;
    if (xdiff === -1 || xdiff === 0) {
      if (ydiff === 0 || ydiff === 1) {
        return true;
      }
    }
  };

  const checkCollisionBunny = () => {
    if (checkCollision(bunnyPosi, rockPosi)) {
      randomPosiRock();
      setScore((prev) => prev + 1);
    }
  };

  return (
    <div className="card bunny-game">
      <div className="card-body">
        <Explanation />
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Stage
            width={map[0].length * BLOCKSIZE}
            height={map.length * BLOCKSIZE}
            renderOnComponentChange={true}
            options={{ backgroundAlpha: 0 }}
          >
            <Text
              text={`SCORE`}
              anchor={[0.5, 0]}
              x={(map[0].length / 2 - 1) * BLOCKSIZE}
              y={BLOCKSIZE}
              style={style as TextStyle}
            />
            <Text
              text={`${score}`}
              anchor={[0.5, 0]}
              x={(map[0].length / 2 - 1) * BLOCKSIZE}
              y={BLOCKSIZE * 3}
              style={style as TextStyle}
            />
            <Textures spritesheet={spritesheet} textureChain={true}>
              {(textures: Texture[]) => (
                <>
                  {Map(textures)}
                  <Bunny
                    textures={textures}
                    posi={bunnyPosi}
                    arrowDown={arrowDow}
                    setPosi={setBunnyPosi}
                    checkCollision={checkCollisionBunny}
                  />
                  <Rock
                    textures={textures}
                    posi={rockPosi}
                    setPosi={setRockPosi}
                  />
                </>
              )}
            </Textures>
          </Stage>
          <Arrow setArrowDown={setArrowDown} />
        </div>
      </div>
    </div>
  );
};

export default BunnyGame;

const style = {
  align: "center",
  fontFamily: "sans-serif",
  fontSize: 20,
  fontWeight: "bold",
  fill: ["#019267"],
  stroke: "#eef1f5",
  strokeThickness: 1,
  letterSpacing: 5,
};
