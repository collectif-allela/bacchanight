import { url } from "inspector"
import Image from "next/image"
import Item from "./Item"
import { useState, useEffect } from 'react';

export default function Paint(props:any) {

  return (
    <div className="h-screen w-screen relative overflow-scroll">
      <div id="zoom" className="relative w-min h-min" >
        <img className={props.class} src={props.src} alt={props.alt} />
        <Item class="error absolute w-[5.06%] z-10 top-[60.94%] left-[89.52%]" src="/paint_1_error_1.png" onclick= {props.itemClick} id="1"/>
        <Item class="error absolute w-[5.06%] z-10 top-[60.94%] left-[70.52%]" src="/paint_1_error_1.png" onclick= {props.itemClick} id="2"/>
      </div>
    </div>

  )
}
