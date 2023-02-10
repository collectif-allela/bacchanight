import { url } from "inspector"
import Image from "next/image"
import Item from "./Item"
import { useState, useEffect } from 'react';

export default function Paint(props:any) {

  return (
    <div className="h-screen w-screen relative overflow-scroll">
      <div id="zoom" className="relative w-min h-min" >
        <img className={props.class} src={props.src} alt={props.alt} />
        <Item class="error absolute w-[2.1%] z-10 top-[65.3%] left-[86.5%]" src="/01_bougie.png" onclick= {props.itemClick} id="1"/>
        <Item class="error absolute w-[7.87%] z-10 top-[6.15%] left-[26.1%]" src="/01_chauve_souris.png" onclick= {props.itemClick} id="2"/>
        <Item class="error absolute w-[11.9%] z-10 top-[5.7%] left-[87.8%]" src="/01_diable.png" onclick= {props.itemClick} id="3"/>
        <Item class="error absolute w-[2.1%] z-10 top-[25.38%] left-[38.4%]" src="/01_fleur.png" onclick= {props.itemClick} id="4"/>
        <Item class="error absolute w-[9.2%] z-10 top-[42.9%] left-[81.2%]" src="/01_date.png" onclick= {props.itemClick} id="5"/>
        <Item class="error absolute w-[1.13%] z-10 top-[57.16%] left-[21.66%]" src="/01_bague.png" onclick= {props.itemClick} id="6"/>
        <Item class="error absolute w-[9.9%] z-10 top-[61.9%] left-[5.7%]" src="/01_anneau.png" onclick= {props.itemClick} id="7"/>
      </div>
    </div>

  )
}
