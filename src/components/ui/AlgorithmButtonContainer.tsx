
import getBestNeighbor from "@/algorithms/hillclimb/getBestNeighbor";
import getAnnealingNeighbor from "@/algorithms/simulatedannealing/getAnnealingNeighbor";
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
        setBoard(getAnnealingNeighbor(board));
        setLastUsedAlgorithm("Simulated Annealing");
    }
    return (
        <div className="flex flex-row items-center justify-center gap-6 p-2">
            <BoardButton name="Apply Hill Climb" handleClick={getHillClimb}/>
            <BoardButton name="Apply Simulated Annealing" handleClick={getSimulatedAnnealing}/>
        </div>
    );
}