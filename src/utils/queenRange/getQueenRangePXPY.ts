interface QueenRangePXPYProps {
    board: boolean[][],
    row: number,
    col: number
}

function getQueenRangePXPY({ board, row, col }: QueenRangePXPYProps): boolean[][] {
    const updatedBoard = board.map((r) => [...r]);

    let currentRow = row - 1;
    let currentCol = col + 1;

    while (currentRow >= 0 && currentCol < board[0].length) {
        updatedBoard[currentRow][currentCol] = true;
        currentRow--;
        currentCol++;
    }

    return updatedBoard;
}

export default getQueenRangePXPY;
