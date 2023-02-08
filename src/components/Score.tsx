import Image from "next/image"
import Error from "./Error"
import { useState } from "react";


export default function Score(props:any) {

  return (
    <div><span className="text-white text-xxl" id="score">{props.score}</span></div>

  )
}
