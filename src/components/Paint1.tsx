import { url } from "inspector"
import Image from "next/image"
import Item from "./Item"
import { useState, useEffect } from 'react';

export default function Paint(props:any) {

  return (
    <div className="h-screen w-screen relative overflow-scroll">
      <div id="zoom" className="relative w-min h-min" >
        <img className={props.class} src={props.src} alt={props.alt} />
        <Item class="error absolute w-[12.35%] z-10 top-[68.9%] left-[0%]" src="/02_barill.png" onclick= {props.itemClick} id="1"/>
        <Item class="error absolute w-[4.26%] z-10 top-[72.55%] left-[31.26%]" src="/02_chaussures.png" onclick= {props.itemClick} id="2"/>
        <Item class="error absolute w-[5.12%] z-10 top-[64.9%] left-[84.95%]" src="/02_bouteille.png" onclick= {props.itemClick} id="3"/>
        <Item class="error absolute w-[2.74%] z-10 top-[40.39%] left-[47.63%]" src="/02_chapeau.png" onclick= {props.itemClick} id="4"/>
        <Item class="error absolute w-[7.22%] z-10 top-[51.17%] left-[62.25%]" src="/02_violon.png" onclick= {props.itemClick} id="5"/>
        <Item class="error absolute w-[9.52%] z-10 top-[39.47%] left-[21.6%]" src="/02_guitare.png" onclick= {props.itemClick} id="6"/>
        <Item class="error absolute w-[6.4%] z-10 top-[7.34%] left-[38.54%]" src="/02_hiboux.png" onclick= {props.itemClick} id="7"/>
      </div>
    </div>

  )
}
