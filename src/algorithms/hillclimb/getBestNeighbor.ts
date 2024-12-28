import { getHeuristic } from "../getHeuristic";

type Board = boolean[][];

export default function findLowestConflictNeighbor(board: Board): Board {
    const n = board.length;
    let bestBoard = JSON.parse(JSON.stringify(board)) as Board; // Deep copy
    let minConflicts = getHeuristic(board);
  
    for (let row = 0; row < n; row++) {
      const currentCol = board[row].indexOf(true);
      if (currentCol === -1) continue; // Skip rows without queens
  
      for (let col = 0; col < n; col++) {
        if (col === currentCol) continue; // Skip the current position
  
        // Create a new board with the queen moved to the new column
        const newBoard = JSON.parse(JSON.stringify(board)) as Board;
        newBoard[row][currentCol] = false;
        newBoard[row][col] = true;
  
        const conflicts = getHeuristic(newBoard);
  
        // Ensure the number of queens remains the same
        const originalQueenCount = board.flat().filter(Boolean).length;
        const newQueenCount = newBoard.flat().filter(Boolean).length;
  
        if (conflicts < minConflicts && newQueenCount === originalQueenCount) {
          bestBoard = newBoard;
          minConflicts = conflicts;
        }
      }
    }
  
    return bestBoard;
  }