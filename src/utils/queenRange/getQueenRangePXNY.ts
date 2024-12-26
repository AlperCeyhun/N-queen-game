interface QueenRangePXNYProps {
    board: boolean[][],
    row: number,
    col: number
}

function getQueenRangePXNY({ board, row, col }: QueenRangePXNYProps): boolean[][] {
    const updatedBoard = board.map((r) => [...r]);

    let currentRow = row + 1;
    let currentCol = col + 1;

    while (currentRow < board.length && currentCol < board[0].length) {
        updatedBoard[currentRow][currentCol] = true;
        currentRow++;
        currentCol++;
    }

    return updatedBoard;
}

export default getQueenRangePXNY;