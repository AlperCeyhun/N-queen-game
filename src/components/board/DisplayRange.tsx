"use client";
import React from "react";
import Tile from "./Tile";

interface DisplayRangeProps {
  board: boolean[][];
}

const DisplayRange: React.FC<DisplayRangeProps> = ({ board }) => {
  const boardLength = board.length;

  return (
    <div
      className="grid absolute z-10"
      style={{
        gridTemplateColumns: `repeat(${boardLength}, 1fr)`,
        gridTemplateRows: `repeat(${boardLength}, 1fr)`,
        gap: "2px",}}>

      {board.map((row, rowIndex) =>
        row.map((hasRange, colIndex) => (
          <Tile
            key={`${rowIndex}-${colIndex}`}
            tileColor={hasRange ? "bg-black opacity-60" : "bg-whiteTile opacity-0"}/>)))}
    </div>
    );
};

export default DisplayRange;