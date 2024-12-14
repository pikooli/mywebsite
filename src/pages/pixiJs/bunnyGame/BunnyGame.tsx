import React, { useCallback, useState, useMemo } from 'react';
import { Stage, Text } from '@pixi/react';
import { TextStyle } from 'pixi.js';

import Title3 from 'src/components/text/Title3';
import { map, BLOCKSIZE } from 'src/pages/pixiJs/bunnyGame/utils';
import Bunny from 'src/pages/pixiJs/bunnyGame/Bunny';
import Map from 'src/pages/pixiJs/bunnyGame/Map';
import Rock from 'src/pages/pixiJs/bunnyGame/Rock';
import Explanation from 'src/pages/pixiJs/bunnyGame/Explaination';
import Arrow from 'src/pages/pixiJs/bunnyGame/Arrows';
import { GithubIcon } from 'src/components/icon/index';
import { useTextures } from 'src/lib/PixiJs/useTexture';

const GITHUB =
  'https://github.com/pikooli/mywebsite/tree/main/src/pages/pixiJs/bunnyGame';

const spritesheet = '/bunny/bunny.json';
const spritesheetName = 'bunny';

const LIMITUP = 2;
const LIMITRIGHT = map[0].length - 2;
const LIMITDOWN = map.length - 2;

interface RenderGameProps {
  bunnyPosi: Position;
  arrowDown: string;
  setBunnyPosi: (position: Position) => void;
  checkCollisionBunny: () => void;
  rockPosi: Position;
  setRockPosi: (position: Position) => void;
}

const RenderGame = (props: RenderGameProps) => {
  const {
    setRockPosi,
    arrowDown,
    bunnyPosi,
    checkCollisionBunny,
    rockPosi,
    setBunnyPosi,
  } = props;
  const spriteSheetPaths = useMemo(() => [spritesheet], []);
  const spriteSheetNames = useMemo(() => [spritesheetName], []);

  const textures = useTextures({
    spriteSheetPaths,
    spriteSheetNames,
    asTextureChain: true,
  });

  if (!textures.length) {
    return <></>;
  }

  return (
    <>
      <Map textures={textures[0]} />
      <Bunny
        textures={textures[0]}
        posi={bunnyPosi}
        arrowDown={arrowDown}
        setPosi={setBunnyPosi}
        checkCollision={checkCollisionBunny}
      />
      <Rock textures={textures[0]} posi={rockPosi} setPosi={setRockPosi} />
    </>
  );
};

const BunnyGame = () => {
  const [bunnyPosi, setBunnyPosi] = useState({ x: 0, y: map.length - 1 });
  const [rockPosi, setRockPosi] = useState({ x: 5, y: map.length - 1 });
  const [arrowDown, setArrowDown] = useState('');
  const [score, setScore] = useState(0);

  const checkCollision = useCallback(
    (bunnyPosi: Position, rockPosi: Position) => {
      const xdiff = bunnyPosi.x - rockPosi.x;
      const ydiff = bunnyPosi.y - rockPosi.y;
      if (xdiff === -1 || xdiff === 0) {
        if (ydiff === 0 || ydiff === 1) {
          return true;
        }
      }
    },
    []
  );

  const randomPosiRock = useCallback(() => {
    const x = Math.round(Math.random() * LIMITRIGHT);
    const y = Math.round(LIMITUP + Math.random() * LIMITDOWN);
    if (!map[y] || map[y][x] !== 1 || checkCollision(bunnyPosi, { x, y })) {
      randomPosiRock();
    } else setRockPosi({ x, y });
  }, [setRockPosi, checkCollision]);

  const checkCollisionBunny = useCallback(() => {
    if (checkCollision(bunnyPosi, rockPosi)) {
      randomPosiRock();
      setScore(prev => prev + 1);
    }
  }, [checkCollision, randomPosiRock, setScore, bunnyPosi, rockPosi]);

  return (
    <div className="card bunny-game">
      <div className="flex">
        <Title3 className="capitalize font-bold mb-5 mr-2" title="Bunny Game" />
        <GithubIcon href={GITHUB} />
      </div>
      <Explanation />
      <div className="flex flex-wrap ">
        <Stage
          width={map[0].length * BLOCKSIZE}
          height={map.length * BLOCKSIZE}
          renderOnComponentChange={true}
          className="mx-auto lg:mx-0"
          options={{ backgroundAlpha: 0 }}
        >
          <RenderGame
            checkCollisionBunny={checkCollisionBunny}
            setRockPosi={setRockPosi}
            arrowDown={arrowDown}
            bunnyPosi={bunnyPosi}
            rockPosi={rockPosi}
            setBunnyPosi={setBunnyPosi}
          />
          <Text
            text={`SCORE`}
            anchor={[0.4, 0]}
            zIndex={100}
            x={(map[0].length / 2) * BLOCKSIZE}
            y={BLOCKSIZE}
            style={style as TextStyle}
          />
          <Text
            text={`${score}`}
            anchor={[0.4, 0]}
            zIndex={100}
            x={(map[0].length / 2) * BLOCKSIZE}
            y={BLOCKSIZE * 3}
            style={style as TextStyle}
          />
        </Stage>
        <Arrow setArrowDown={setArrowDown} />
      </div>
    </div>
  );
};

export default BunnyGame;

const style = {
  align: 'center',
  fontFamily: 'sans-serif',
  fontSize: 20,
  fontWeight: 'bold',
  fill: ['#019267'],
  stroke: '#eef1f5',
  strokeThickness: 1,
  letterSpacing: 5,
};
