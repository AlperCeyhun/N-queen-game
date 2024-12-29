import BoardButton from "@/components/ui/BoardButton";
import Image from "next/image";
import minus from "@/assets/icons/minus.png";
import plus from "@/assets/icons/plus.png";
import { useState } from "react";
import MessageBox from "./MessageBox";

interface ButtonContainerProps {
  board: boolean[][];
  setBoard: (board: boolean[][]) => void;
  boardSize: number;
  setBoardSize: (size: number) => void;
  setLastUsedAlgorithm: (name: string) => void;
  handleReset: () => void;
}

export default function ButtonContainer({ boardSize, setBoardSize, setLastUsedAlgorithm, handleReset, board, setBoard }: ButtonContainerProps) {
  const [savedBoard, setSavedBoard] = useState<boolean[][]>([]);
  const [showMessage, setShowMessage] = useState<string | null>(null); 

  const expandBoard = () => {
    setBoardSize(boardSize + 1);
    setLastUsedAlgorithm("none");
  };

  const shrinkBoard = () => {
    if (boardSize > 1) {
      setBoardSize(boardSize - 1);
      setLastUsedAlgorithm("none");
    }
  };

  const saveBoard = () => {
    setSavedBoard(board);
    setShowMessage("Board saved successfully!");
  };

  const importSavedBoard = () => {
    if (savedBoard.length === 0) {
      setShowMessage("No saved board found.");
    } else {
      setBoardSize(savedBoard.length);
      setBoard(savedBoard);
      setShowMessage("Board imported successfully!");
    }
  };

  return (
    <div className="flex flex-row items-center justify-center gap-6">
      <BoardButton handleClick={expandBoard} name="Expand Board">
        <Image src={plus} width={20} height={20} alt="plus" className="mr-4" />
      </BoardButton>
      <BoardButton handleClick={shrinkBoard} name="Shrink Board">
        <Image src={minus} width={20} height={20} alt="minus" className="mr-4" />
      </BoardButton>
      <BoardButton name="Reset Board" handleClick={handleReset} />
      <p className="px-4"></p>
      <BoardButton name="Save Board" handleClick={saveBoard} />
      <BoardButton name="Import Saved Board" handleClick={importSavedBoard} />
      {showMessage && (<MessageBox message={showMessage} onClose={() => setShowMessage(null)}/>)}
    </div>
  );
}