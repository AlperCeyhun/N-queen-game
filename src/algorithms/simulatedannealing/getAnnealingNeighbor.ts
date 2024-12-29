import { getHeuristic } from "../getHeuristic";

type Board = boolean[][];

/**
 * Solves the N-Queen problem using Simulated Annealing.
 *
 * @param board - A 2D boolean array representing the board, where `true` indicates a queen.
 * @returns The board configuration after applying simulated annealing.
 */
export default function solveNQueenWithAnnealing(board: Board): Board {
  const n = board.length;

  /**
   * Generates a neighboring board configuration by moving a queen to a new column in the same row.
   *
   * @param board - The current board configuration.
   * @returns A new neighboring board configuration.
   */
  const generateNeighbor = (board: Board): Board => {
    const newBoard = board.map(row => [...row]);
    const row = Math.floor(Math.random() * n);
    const currentCol = newBoard[row].indexOf(true);
    let newCol;

    do {
      newCol = Math.floor(Math.random() * n);
    } while (newCol === currentCol);

    newBoard[row][currentCol] = false;
    newBoard[row][newCol] = true;

    return newBoard;
  };

  // Simulated Annealing process
  let temperature = 100; // Initial temperature
  const coolingRate = 0.99; // Cooling rate
  let currentBoard = board;
  let currentConflicts = getHeuristic(currentBoard);

  while (temperature > 1 && currentConflicts > 0) {
    const neighbor = generateNeighbor(currentBoard);
    const neighborConflicts = getHeuristic(neighbor);

    if (
      neighborConflicts < currentConflicts ||
      Math.random() < Math.exp((currentConflicts - neighborConflicts) / temperature)
    ) {
      currentBoard = neighbor;
      currentConflicts = neighborConflicts;
    }
    console.log(temperature);
    temperature *= coolingRate;
  }

  return currentBoard;
}