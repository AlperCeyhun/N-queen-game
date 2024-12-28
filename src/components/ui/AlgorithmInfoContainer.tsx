import React from "react";
import GridItem from "./GridItem";
import { getHeuristic } from "@/algorithms/getHeuristic";

interface AlgorithmInfoContainerProps {
  board: boolean[][];
  algorithmName: string;
}

export default function AlgorithmInfoContainer({board, algorithmName}: AlgorithmInfoContainerProps) {
  return (
    <div className="flex flex-row items-center justify-center gap-6 mt-6">
      <GridItem size="h-auto w-auto" isFlexCol={true} bgColor="bg-[#333333]">
        <h1 className="text-white text-2xl mb-4">Last Used algorithm: {algorithmName && algorithmName}</h1>
        <p  className="text-white">Heuristic Function value: {getHeuristic(board)}</p>
      </GridItem>
    </div>
  );
}