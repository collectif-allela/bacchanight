import { url } from "inspector"
import Image from "next/image"
import Error from "./Error"


export default function Paint(props:any) {
  return (
    <div className="h-screen w-screen relativ">
      <div className="overflow-hidden absolute bottom-0 right-0" >
        <img className={props.class} src={props.src} alt={props.alt} />
        <Error class="error absolute w-[5.06%] z-10 top-[60.94%] left-[89.52%]" src="/paint_1_error_1.png" id="1"/>
        <Error class="error absolute w-[5.06%] z-10 top-[60.94%] left-[70.52%]" src="/paint_1_error_1.png" id="2"/>
      </div>
    </div>

  )
}
