interface QueenRange0PYProps {
    board: boolean[][],
    row: number,
    col: number
}

function getQueenRange0PY({ board, row, col }: QueenRange0PYProps): boolean[][] {
    const updatedBoard = board.map((r) => [...r]);

    let currentRow = row - 1;

    while (currentRow >= 0) {
        updatedBoard[currentRow][col] = true;
        currentRow--;
    }

    return updatedBoard;
}

export default getQueenRange0PY;
