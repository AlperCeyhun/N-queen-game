interface QueenRangeNXNYProps {
    board: boolean[][],
    row: number,
    col: number
}

function getQueenRangeNXNY({ board, row, col }: QueenRangeNXNYProps): boolean[][] {
    const updatedBoard = board.map((r) => [...r]);

    let currentRow = row + 1;
    let currentCol = col - 1;

    while (currentRow < board.length && currentCol >= 0) {
        updatedBoard[currentRow][currentCol] = true;
        currentRow++;
        currentCol--;
    }

    return updatedBoard;
}

export default getQueenRangeNXNY;
