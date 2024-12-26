interface QueenRangePX0Props {
    board: boolean[][],
    row: number,
    col: number
}

function getQueenRangePX0({ board, row, col }: QueenRangePX0Props): boolean[][] {
    const updatedBoard = board.map((r) => [...r]);

    for (let c = col + 1; c < board[row].length; c++) {
      updatedBoard[row][c] = true;
    }

    return updatedBoard;
}

export default getQueenRangePX0;