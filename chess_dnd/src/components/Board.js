import React from 'react'
import { DndProvider } from "react-dnd";
import HTML5Backend from 'react-dnd-html5-backend';

import Square from './Square'
import BoardSquare from './BoardSquare'
import Knight from './Knight'
import { moveKnight } from "./Game";
import { canMoveKnight } from "./Game";

export default function Board({knightPosition}) {
    const squares =[];
    for (let i=0;i <64; i++) {
        squares.push(renderSquare(i, knightPosition))
    }
    return (
        <DndProvider backend={HTML5Backend}>
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexWrap: 'wrap',
        }}

        >
            {squares}
         </div>
        </DndProvider>
    )
}


function renderSquare(i, knightPosition) {
    const x = i % 8
    const y = Math.floor(i / 8)
    return (
        <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
            <BoardSquare x={x} y={y}>
                {renderPiece(x, y, knightPosition)}
            </BoardSquare>
        </div>
    )
}

function renderPiece(x, y, [knightX, knightY]) {
    if (x === knightX && y === knightY) {
        return <Knight />
    }
}



function handleSquareClick(toX, toY) {
    if (canMoveKnight(toX, toY)) {
        moveKnight(toX, toY);
    }
}
