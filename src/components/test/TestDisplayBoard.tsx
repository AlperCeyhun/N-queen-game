"use client";
import React, { useState } from "react";

interface DisplayBoardProps {
  board: boolean[][];
}

const DisplayBoard: React.FC<DisplayBoardProps> = ({ board }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, cellIndex) => (
            <span key={cellIndex} className="cell text-white">
              {cell ? "Q" : "M"}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DisplayBoard;
