"use client"
import createRandomBoard from "@/utils/CreateRandomBoard";
import DisplayBoard from "@/components/board/DisplayBoard";
import { useEffect, useState } from "react";
import TestDisplayBoard from "@/components/test/TestDisplayBoard";
import getQueenRange from "@/utils/queenRange/GetQueenRange";
import CreateEmptyBoard from "@/utils/CreateEmptyBoard";

export default function Home() {
  const boardSize = 10;
  const [board, setBoard] = useState<boolean[][]>([]);
  
  const testBoard = CreateEmptyBoard(boardSize);

  useEffect(() => {
    setBoard(createRandomBoard(boardSize));
  }, []);

  return (
    <div className="flex items-center justify-center flex-col">
      <DisplayBoard board={board}/>
      <TestDisplayBoard board={getQueenRange({ board: testBoard, row: 2, col: 2})} />
    </div>
  );
}