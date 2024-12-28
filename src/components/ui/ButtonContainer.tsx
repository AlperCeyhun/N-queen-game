import BoardButton from "@/components/ui/BoardButton";
import Image from "next/image";
import minus from "@/assets/icons/minus.png";
import plus from "@/assets/icons/plus.png";

interface ButtonContainerProps {
  boardSize: number;
  setBoardSize: (size: number) => void;
  setLastUsedAlgorithm: (name: string) => void;
  handleReset: () => void;
}

export default function ButtonContainer({ boardSize, setBoardSize, setLastUsedAlgorithm, handleReset}: ButtonContainerProps) {
  const expandBoard = () =>{
    setBoardSize(boardSize + 1);
    setLastUsedAlgorithm("none");
  }
  const shrinkBoard = () =>{
    setBoardSize(boardSize - 1);
    setLastUsedAlgorithm("none");
  }
  return (
    <div className="flex flex-row items-center justify-center gap-6">
      <BoardButton handleClick={expandBoard} name="Expand Board">
        <Image src={plus} width={20} height={20} alt="plus" className="mr-4"/>
      </BoardButton>
      <BoardButton handleClick={shrinkBoard} name="Shrink Board">
        <Image src={minus} width={20} height={20} alt="minus" className="mr-4"/>
      </BoardButton>
      <BoardButton name="Reset Board" handleClick={handleReset}/>
    </div>
  );
}