import Image from "next/image"

export default function Paint(props:any) {

  return (
    <div className="h-full">
      <Image
            src="/../public/jour_des_mort.png"
            alt="Picture of a file"
            width={100}
            height={100}
            className="m-auto"
          />

    </div>


  )
}
