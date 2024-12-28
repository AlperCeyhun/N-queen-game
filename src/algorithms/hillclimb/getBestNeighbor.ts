import { getHeuristic } from "../getHeuristic";

type Board = boolean[][];

/**
 * Finds the best neighboring board with the lowest conflicts.
 * Allows queens to move both horizontally and vertically.
 *
 * @param board - A 2D boolean array representing the board, where `true` indicates a queen.
 * @returns The board configuration with the lowest conflicts among neighbors.
 */
export default function getBestNeighbor(board: Board): Board {
  const n = board.length;
  const originalQueenCount = board.flat().filter(Boolean).length;

  let bestBoard = JSON.parse(JSON.stringify(board)) as Board; // Deep copy
  let minConflicts = getHeuristic(board);

  for (let row1 = 0; row1 < n; row1++) {
    for (let col1 = 0; col1 < n; col1++) {
      if (!board[row1][col1]) continue; // Skip cells without queens

      for (let row2 = 0; row2 < n; row2++) {
        for (let col2 = 0; col2 < n; col2++) {
          if (row1 === row2 && col1 === col2) continue; // Skip the current position

          // Create a new board with the queen moved to a new position
          const newBoard = JSON.parse(JSON.stringify(board)) as Board;
          newBoard[row1][col1] = false;
          newBoard[row2][col2] = true;

          const newQueenCount = newBoard.flat().filter(Boolean).length;

          // Only consider valid boards with the same number of queens
          if (newQueenCount !== originalQueenCount) continue;

          const conflicts = getHeuristic(newBoard);

          if (conflicts < minConflicts) {
            bestBoard = newBoard;
            minConflicts = conflicts;
          }
        }
      }
    }
  }

  return bestBoard;
}
