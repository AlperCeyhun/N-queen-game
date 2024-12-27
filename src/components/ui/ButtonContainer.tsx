import BoardSizeButton from "@/components/ui/BoardSizeButton";
import Image from "next/image";
import minus from "@/assets/icons/minus.png";
import plus from "@/assets/icons/plus.png";

interface ButtonContainerProps {
  boardSize: number;
  setBoardSize: (size: number) => void;
}

export default function ButtonContainer({ boardSize, setBoardSize }: ButtonContainerProps) {
  return (
    <div className="flex flex-row items-center justify-center gap-6">
      <BoardSizeButton handleClick={() => setBoardSize(boardSize + 1)} name="Expand Board">
        <Image src={plus} width={20} height={20} alt="plus" className="mr-4"/>
      </BoardSizeButton>
      <BoardSizeButton handleClick={() => setBoardSize(boardSize - 1)} name="Shrink Board">
        <Image src={minus} width={20} height={20} alt="minus" className="mr-4"/>
      </BoardSizeButton>
    </div>
  );
}