
import { useState } from "react"

export default function Item(props:any) {

  const [show, setShow]= useState(true);

  function handleClick(event: any){
    setShow(false);
    props.onclick(event);
  }

  return (
    // This shows the element it the variable is  true and nothing if false
    show && <img className={props.class} src={props.src} id={props.id} alt="devil_image" onClick={handleClick}/>
  );

}
