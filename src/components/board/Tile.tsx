"use client";
import React, { useState } from "react";

interface TileProps{
    tileColor?: string
    children?: React.ReactNode
}

const Tile: React.FC<TileProps> = ({tileColor,children}) => {

    return (
        <div className={`
        ${tileColor ? tileColor : "bg-black"}
        h-16 w-16 z-5`}>
            {children}
        </div>
    );
};

export default Tile;
