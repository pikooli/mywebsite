import { Board } from 'puyopuyo/types';

export function logArrayInSixRows(board: Board) {
  const rows = 6;
  const columns = 12;

  const rowStrings = Array.from({ length: columns }, (_, row) => {
    const start = row * rows;
    const end = start + rows;
    const rowArray = board.slice(start, end);
    return rowArray.join(', ');
  });

  const outputString = rowStrings.join('\n');

  console.log(outputString);
}
