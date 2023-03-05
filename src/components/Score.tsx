import Image from "next/image"
import Error from "./Item"
import { useState } from "react";


export default function Score(props:any) {

  return (
    <div className="fixed bottom-5 left-5 z-50"><span className="text-primary text-3xl font-redaction" id="score">{props.score}/7</span></div>
  )
}
