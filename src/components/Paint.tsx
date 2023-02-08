import { url } from "inspector"
import Image from "next/image"
import Error from "./Error"


export default function Paint(props:any) {
  return (
    <div className="h-screen w-screen relativ">
      <div className="overflow-hidden absolute bottom-0 right-0" >
        <img className={props.class} src={props.src} alt={props.alt} />
<<<<<<< HEAD
        <Error id="error" class="absolute w-[5.06%] z-10 top-[60.94%] left-[89.52%]" src="/paint_1_error_1.png" id="error1"/>
=======
        <Error class="error absolute w-[5.06%] z-10 top-[60.94%] left-[89.52%]" src="/paint_1_error_1.png" id="1"/>
        <Error class="error absolute w-[5.06%] z-10 top-[60.94%] left-[70.52%]" src="/paint_1_error_1.png" id="2"/>
>>>>>>> aac3aa62e07128b6eee696dd6de8efb1e07319b9
      </div>
    </div>

  )
}
