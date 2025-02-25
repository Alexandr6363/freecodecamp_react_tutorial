'use client'

import Image from "next/image";
import data_box from "./data/data_box";
import Box from "./Box";
import React from "react";

export default function Boxes() {
  const [squares, setSquares] = React.useState(data_box)
  function toggle(id){
    setSquares(prevArray => {
                 return prevArray.map((square) => {
                    return square.id === id ? {...square, on: !square.on} : square
        })
      } 
    )
  }

  const boxes = squares.map(box => {
    return (
        <Box 
        key={box.id}
        id={box.id}
        on={box.on}
        toggle={toggle}
        />
    )
  })
  return (
    <div>
      {boxes}
    </div>
  )
  
}