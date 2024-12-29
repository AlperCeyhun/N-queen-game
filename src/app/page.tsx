"use client"
import createRandomBoard from "@/utils/CreateRandomBoard";
import DisplayBoard from "@/components/board/DisplayBoard";
import { useEffect, useState } from "react";
import BoardButtonContainer from "@/components/ui/ButtonContainer";
import AlgorithmInfoContainer from "@/components/ui/AlgorithmInfoContainer";
import AlgorithmButtonContainer from "@/components/ui/AlgorithmButtonContainer";


export default function Home() {
  
  const [boardSize, setBoardSize] = useState(4);
  const [board, setBoard] = useState<boolean[][]>([]);
  const [lastUsedAlgorithm, setLastUsedAlgorithm] = useState("None");

  useEffect(() => {
    setBoard(createRandomBoard(boardSize));
  }, [boardSize]);
  
  const resetboard = () => {
    setBoard(createRandomBoard(boardSize));
  }

  return (
    <div className="flex relative items-center justify-center flex-col">
      <BoardButtonContainer boardSize={boardSize} setBoardSize={setBoardSize} setLastUsedAlgorithm={setLastUsedAlgorithm} handleReset={resetboard}/>
      <AlgorithmButtonContainer board={board} setBoard={setBoard} setLastUsedAlgorithm={setLastUsedAlgorithm}/>
      <DisplayBoard board={board}/>
      <AlgorithmInfoContainer board={board} algorithmName={lastUsedAlgorithm}/>
    </div>
  );
}