import getQueenRangeNXNY from './getQueenRangeNXNY';
import getQueenRangeNX0 from './getQueenRangeNX0';
import getQueenRangeNXPY from './getQueenRangeNXPY';
import getQueenRange0NY from './getQueenRange0NY';
import getQueenRange0PY from './getQueenRange0PY';
import getQueenRangePXNY from './getQueenRangePXNY';
import getQueenRangePX0 from './getQueenRangePX0';
import getQueenRangePXPY from './getQueenRangePXPY';

interface GetQueenRangeProps {
    board: boolean[][],
    row: number,
    col: number
}

function getQueenRange({ board, row, col }: GetQueenRangeProps): boolean[][] {
    
    let resultBoard = board.map((r) => r.map(() => false));

    const directions = [
        getQueenRangeNXNY({ board, row, col }), // Left and Down
        getQueenRangeNXPY({ board, row, col }), // Left and Up
        getQueenRangeNX0({ board, row, col }),  // Left
        getQueenRangePXNY({ board, row, col }), // Right and Down
        getQueenRangePXPY({ board, row, col }), // Right and Up
        getQueenRangePX0({ board, row, col }),  // Right
        getQueenRange0NY({ board, row, col }),  // Down
        getQueenRange0PY({ board, row, col }),  // Up
    ];

    directions.forEach((directionBoard) => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                resultBoard[i][j] = resultBoard[i][j] || directionBoard[i][j];
            }
        }
    });
    resultBoard[row][col] = true;
    return resultBoard;
}

export default getQueenRange;