'use client'

import Image from "next/image";
import React from "react";
import Boxes from "./Boxes";
import Jokes from "./Jokes";

export default function Home() {

  return (
    <div>
      <Boxes />
      <Jokes />
    </div>
  )
  
}
