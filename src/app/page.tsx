"use client"
import createRandomBoard from "@/utils/CreateRandomBoard";
import DisplayBoard from "@/components/board/DisplayBoard";
import { useEffect, useState } from "react";

export default function Home() {
  const boardSize = 10;
  const [board, setBoard] = useState<boolean[][]>([]);

  useEffect(() => {
    setBoard(createRandomBoard(boardSize));
  }, []);

  return (
    <div className="flex relative items-center justify-center flex-col">
      <DisplayBoard board={board}/>
    </div>
  );
}