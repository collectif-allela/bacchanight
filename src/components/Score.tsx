import Image from "next/image"
import Error from "./Item"
import { useState } from "react";


export default function Score(props:any) {

  return (
    <div className="absolute bottom-10 left-10"><span className="text-primary text-4xl" id="score">{props.score}/7</span></div>

  )
}
