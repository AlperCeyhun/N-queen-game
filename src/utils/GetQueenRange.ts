"use client";
import React, { useState } from "react";

interface GetQueenRangeProps{
    board: boolean[][];
}

const getQueenRange: React.FC<GetQueenRangeProps>  = ({ board }) => {

    const [queenRange, setQueenRange] = useState<boolean[][]>([]);
    
    return (queenRange);
};
