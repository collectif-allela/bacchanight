import { url } from "inspector"
import Image from "next/image"
import Error from "./Error"


export default function Paint(props:any) {

  return (
    <div className="h-screen w-screen bg-red-200 overflow-hidden relative" >
      <img className="max-w-none absolute bottom-0 right-0 "src="/jour_des_morts.jpg" alt="" />
      <Error class="absolute w-[5.06%] z-10 top-[60.94%] left-[89.52%]" src="/paint_1_error_1.png" id="error1"/>
    </div>


  )
}
