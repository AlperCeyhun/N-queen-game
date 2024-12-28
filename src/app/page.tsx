"use client"
import createRandomBoard from "@/utils/CreateRandomBoard";
import DisplayBoard from "@/components/board/DisplayBoard";
import { useEffect, useState } from "react";
import ButtonContainer from "@/components/ui/ButtonContainer";
import AlgorithmInfoContainer from "@/components/ui/AlgorithmInfoContainer";
import BoardButton from "@/components/ui/BoardButton";
import getBestNeighbor from "@/algorithms/hillclimb/getBestNeighbor";


export default function Home() {
  
  const [boardSize, setBoardSize] = useState(4);
  const [board, setBoard] = useState<boolean[][]>([]);
  const [lastUsedAlgorithm, setLastUsedAlgorithm] = useState("None");

  useEffect(() => {
    setBoard(createRandomBoard(boardSize));
  }, [boardSize]);

  const getHillClimb = () =>{
    setBoard(getBestNeighbor(board));
    setLastUsedAlgorithm("Hill Climb");
  }
  return (
    <div className="flex relative items-center justify-center flex-col">
      <ButtonContainer boardSize={boardSize} setBoardSize={setBoardSize} setLastUsedAlgorithm={setLastUsedAlgorithm}/>
      <BoardButton name="Apply Hill Climb" handleClick={getHillClimb}/>
      <DisplayBoard board={board}/>
      <AlgorithmInfoContainer board={board} algorithmName={lastUsedAlgorithm}/>
    </div>
  );
}