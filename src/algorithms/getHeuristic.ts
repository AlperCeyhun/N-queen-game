type Board = boolean[][];

export function getHeuristic(board: Board): number {
    const n = board.length;
    let conflicts = 0;

    // Helper function to count queens in a specific line (row, column, or diagonal)
    const countQueens = (positions: [number, number][]): number => {
        return positions.reduce((count, [row, col]) => count + (board[row][col] ? 1 : 0), 0);
    };

    // Check rows
    for (let row = 0; row < n; row++) {
        const queensInRow = countQueens(
            Array.from({ length: n }, (_, col) => [row, col])
        );
        if (queensInRow > 1) conflicts += queensInRow - 1;
    }

    // Check columns
    for (let col = 0; col < n; col++) {
        const queensInCol = countQueens(
            Array.from({ length: n }, (_, row) => [row, col])
        );
        if (queensInCol > 1) conflicts += queensInCol - 1;
    }

    // Check diagonals (top-left to bottom-right)
    for (let d = -(n - 1); d <= n - 1; d++) {
        const queensInDiagonal = countQueens(
            Array.from({ length: n }, (_, i) => [i, i + d] as [number, number]) 
                .filter(([row, col]) => row >= 0 && col >= 0 && row < n && col < n)
        );
        if (queensInDiagonal > 1) conflicts += queensInDiagonal - 1;
    }

    // Check anti-diagonals (top-right to bottom-left)
    for (let d = 0; d <= 2 * (n - 1); d++) {
        const queensInAntiDiagonal = countQueens(
            Array.from({ length: n }, (_, i) => [i, d - i] as [number, number]) 
                .filter(([row, col]) => row >= 0 && col >= 0 && row < n && col < n)
        );
        if (queensInAntiDiagonal > 1) conflicts += queensInAntiDiagonal - 1;
    }

    return conflicts;
}