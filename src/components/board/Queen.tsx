import React, { useState } from "react";
import DisplayRange from "./DisplayRange";
import getQueenRange from "@/utils/queenRange/GetQueenRange";
import CreateEmptyBoard from "@/utils/CreateEmptyBoard";

interface QueenProps{
  board: boolean[][]
  row: number,
  col: number
}

const Queen: React.FC<QueenProps> = ({row, col, board}) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (hovering: boolean) => {
    setIsHovered(hovering);
  };
  return (
    <div className="flex justify-center items-center h-full z-15"
    onMouseEnter={() => handleHover(true)}
    onMouseLeave={() => handleHover(false)}>
      <span className="text-5xl text-black font-bold">♕</span>

      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full">
          <DisplayRange board={getQueenRange({ board: CreateEmptyBoard(board.length), row, col })} />
        </div>
      )}
    </div>
  );
};
export default Queen;