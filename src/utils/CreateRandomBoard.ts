interface CreateRandomBoardProps {
    boardSize: number;
}

function createRandomBoard(boardSize: number): boolean[][] {
    const board: boolean[][] = Array.from({ length: boardSize }, () => Array(boardSize).fill(false));
  
    let count = 0;
  
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (Math.random() > 0.6) {
          board[i][j] = true;
          count++;
        }

        if (count >= boardSize) {
          return board;
        }
      }
    }
    return board;
}
  
  export default createRandomBoard;
  