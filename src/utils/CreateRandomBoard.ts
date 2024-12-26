function createRandomBoard(boardSize: number): boolean[][] {
  const board: boolean[][] = Array.from({ length: boardSize }, () => Array(boardSize).fill(false));

  const totalCells = boardSize * boardSize;
  const queenCount = boardSize;
  const positions = Array.from({ length: totalCells }, (_, index) => index);

  for (let i = positions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [positions[i], positions[j]] = [positions[j], positions[i]];
  }

  for (let k = 0; k < queenCount; k++) {
    const position = positions[k];
    const row = Math.floor(position / boardSize);
    const col = position % boardSize;
    board[row][col] = true;
  }

  return board;
}

export default createRandomBoard;
