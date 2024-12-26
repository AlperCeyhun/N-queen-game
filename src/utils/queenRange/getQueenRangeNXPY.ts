interface QueenRangeNXPYProps {
    board: boolean[][],
    row: number,
    col: number
}

function getQueenRangeNXPY({ board, row, col }: QueenRangeNXPYProps): boolean[][] {
    const updatedBoard = board.map((r) => [...r]);

    let currentRow = row - 1;
    let currentCol = col - 1;

    while (currentRow >= 0 && currentCol >= 0) {
        updatedBoard[currentRow][currentCol] = true;
        currentRow--;
        currentCol--;
    }

    return updatedBoard;
}

export default getQueenRangeNXPY;