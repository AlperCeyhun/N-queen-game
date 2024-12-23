"use client";
import React from "react";
import Tile from "./Tile";
import Queen from "./Queen";

interface DisplayBoardProps {
  board: boolean[][];
}

const DisplayBoard: React.FC<DisplayBoardProps> = ({ board }) => {
  const boardLength = board.length;

  return (
    <div
      className="grid mt-12"
      style={{
        gridTemplateColumns: `repeat(${boardLength}, 1fr)`,
        gridTemplateRows: `repeat(${boardLength}, 1fr)`,
        gap: "2px",}}>

      {board.map((row, rowIndex) =>
        row.map((hasQueen, colIndex) => (
          <Tile
            key={`${rowIndex}-${colIndex}`}
            tileColor={
              (rowIndex + colIndex) % 2 === 0 ? "bg-greenTile" : "bg-whiteTile"}>  
            {hasQueen && <Queen />}
          </Tile>)))}
    </div>
  );
};

export default DisplayBoard;