interface Position {
  row: number;
  col: number;
}

interface MaxGroup {
  letter: string;
  size: number;
  positions: Position[];
  elementsIndex: number[];
}

export function findBiggestGroup({
  board,
  numbRow,
}: {
  board: string[];
  numbRow: number;
}): MaxGroup {
  let maxGroupSize = 0;
  let maxGroupLetter = "";
  let maxGroupElements: number[] = [];

  function traverse(startIndex: number, visited: Set<number>): void {
    const letter = board[startIndex];

    let groupSize = 0;
    let groupElements: number[] = [];

    function traverseNeighbors(index: number): void {
      if (index < 0 || index >= board.length || visited.has(index)) {
        return;
      }

      if (board[index] !== letter) {
        return;
      }

      visited.add(index);
      groupSize++;
      groupElements.push(index);

      traverseNeighbors(index + 1);
      traverseNeighbors(index - 1);
      traverseNeighbors(index + numbRow);
      traverseNeighbors(index - numbRow);
    }

    traverseNeighbors(startIndex);

    if (groupSize >= 4 && groupSize > maxGroupSize) {
      maxGroupSize = groupSize;
      maxGroupLetter = letter;
      maxGroupElements = groupElements;
    }
  }

  for (let i = 0; i < board.length; i++) {
    if (maxGroupElements.includes(i) || !board[i]) {
      continue;
    }

    const visited = new Set<number>();
    traverse(i, visited);
  }

  const maxGroupPositions: Position[] = maxGroupElements.map((index) => {
    const row = Math.floor(index / numbRow);
    const col = index % numbRow;
    return { row, col };
  });

  return {
    letter: maxGroupLetter,
    size: maxGroupSize,
    positions: maxGroupPositions,
    elementsIndex: maxGroupElements,
  };
}
