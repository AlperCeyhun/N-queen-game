"use client";

interface TileProps{
    tileColor?: string
    children?: React.ReactNode
}

const Tile: React.FC<TileProps> = ({tileColor,children}) => {

    return (
        <div className={`h-16 w-16 z-5
        ${tileColor ? tileColor : "bg-black"}`}>
            {children}
        </div>
    );
};

export default Tile;
