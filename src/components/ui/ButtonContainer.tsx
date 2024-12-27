import BoardSizeButton from "@/components/ui/BoardSizeButton";

interface ButtonContainerProps {
  boardSize: number;
  setBoardSize: (size: number) => void;
}

export default function ButtonContainer({ boardSize, setBoardSize }: ButtonContainerProps) {
  return (
    <div className="flex flex-row items-center justify-center gap-6">
      <BoardSizeButton handleClick={() => setBoardSize(boardSize + 1)} name="Expand Board"/>
      <BoardSizeButton handleClick={() => setBoardSize(boardSize - 1)} name="Shrink Board"/>
    </div>
  );
}