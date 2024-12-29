
import getBestNeighbor from "@/algorithms/hillclimb/getBestNeighbor";
import BoardButton from "@/components/ui/BoardButton";
import { Dispatch, SetStateAction } from "react";

interface AlgorithmButtonContainerProps {
    board: boolean[][];
    setBoard: (board: boolean[][]) => void;
    setLastUsedAlgorithm: Dispatch<SetStateAction<string>>;
}

export default function AlgorithmButtonContainer({board, setBoard, setLastUsedAlgorithm}: AlgorithmButtonContainerProps) {
  
    const getHillClimb = () => {
        setBoard(getBestNeighbor(board));
        setLastUsedAlgorithm("Hill Climb");
    }
    const getSimulatedAnnealing = () => {
        setLastUsedAlgorithm("Apply Simulated Annealing");
    }
  return (
    <div className="flex flex-row items-center justify-center gap-6 p-2">
        <BoardButton name="Apply Hill Climb" handleClick={getHillClimb}/>
        <BoardButton name="Apply Simulated Annealing" handleClick={getSimulatedAnnealing}/>
    </div>
  );
}