"use client"
import createRandomBoard from "@/utils/CreateRandomBoard";
import DisplayBoard from "@/components/board/DisplayBoard";
import { useEffect, useState } from "react";
import ButtonContainer from "@/components/ui/ButtonContainer";

export default function Home() {
  const [boardSize, setBoardSize] = useState(8);
  const [board, setBoard] = useState<boolean[][]>([]);

  useEffect(() => {
    setBoard(createRandomBoard(boardSize));
  }, [boardSize]);

  return (
    <div className="flex relative items-center justify-center flex-col">
      <ButtonContainer boardSize={boardSize} setBoardSize={setBoardSize}/>
      <DisplayBoard board={board}/>
    </div>
  );
}