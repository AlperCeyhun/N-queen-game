interface QueenRangeNX0Props {
    board: boolean[][],
    row: number,
    col: number
}

function getQueenRangeNX0({ board, row, col }: QueenRangeNX0Props): boolean[][] {
    const updatedBoard = board.map((r) => [...r]);

    let currentCol = col - 1;

    while (currentCol >= 0) {
        updatedBoard[row][currentCol] = true;
        currentCol--;
    }

    return updatedBoard;
}

export default getQueenRangeNX0;