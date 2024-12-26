const CreateEmptyBoard = (boardSize: number): boolean[][] => {
    const board: boolean[][] = Array(boardSize)
      .fill(null)
      .map(() => Array(boardSize).fill(false));
  
    return board;
};
export default CreateEmptyBoard;
  