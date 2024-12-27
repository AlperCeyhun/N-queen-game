"use client";
import React, { useState } from "react";

interface BoardSizeButtonProps{
    children?: React.ReactNode,
    handleClick: () => void,
    name?: string,
}

const BoardSizeButton: React.FC<BoardSizeButtonProps> = ({children,handleClick,name}) => {

    return (
        <div>
            <button className="mt-6 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"type="button" onClick={handleClick}>
                {children && children}
                {name && name}
            </button>
        </div>
    );
};

export default BoardSizeButton;
