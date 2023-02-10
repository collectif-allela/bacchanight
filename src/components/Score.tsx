import Image from "next/image"
import Error from "./Item"
import { useState } from "react";


export default function Score(props:any) {

  return (
    <div className="fixed bottom-5 left-5"><span className="text-primary text-4xl " id="score">{props.score}/7</span></div>
  )
}
