"use client"; 
import React from "react";

interface TestDisplayBoardProps {
  board: boolean[][];
}

const TestDisplayBoard: React.FC<TestDisplayBoardProps> = ({ board }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, cellIndex) => (
            <span
              key={cellIndex}
              className="w-4 h-4 flex items-center justify-center text-white font-mono">
              {cell ? "Q" : "N"}
            </span>))}
        </div>
      ))}
    </div>
  );
};

export default TestDisplayBoard;
