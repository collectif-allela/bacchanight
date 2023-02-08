import { url } from "inspector"
import Image from "next/image"

export default function Error(props:any) {

  return (
    <img className={props.class} src={props.src} id={props.id} alt="devil_image"/>

  )
}
