interface QueenRange0NYProps {
    board: boolean[][],
    row: number,
    col: number
}

function getQueenRange0NY({ board, row, col }: QueenRange0NYProps): boolean[][] {
    const updatedBoard = board.map((r) => [...r]);

    let currentRow = row + 1;

    while (currentRow < board.length) {
        updatedBoard[currentRow][col] = true;
        currentRow++;
    }

    return updatedBoard;
}

export default getQueenRange0NY;