import { useContext, useCallback } from 'react';
import { useMoveKeydown } from '../../hooks';
import { GameContext } from 'src/pages/pixiJs/WonderGame/context';
import { canWonderMove } from '../actions';

export function useMove() {
  const contextValue = useContext(GameContext);
  const {
    wonder: { setParameters },
    map,
  } = contextValue;

  const reactToMove = useCallback(
    (move: Position) => {
      setParameters(prev => {
        const { position, action } = prev;
        if (action) return prev;
        const nextX = position.x + move.x;
        const nextY = position.y + move.y;
        const nextPosition = { x: nextX, y: nextY };
        const posi = canWonderMove(nextPosition, map.map)
          ? nextPosition
          : prev.position;
        return { ...prev, position: posi };
      });
    },
    [setParameters]
  );

  useMoveKeydown({
    reactToMove,
  });
}
