import React from "react"

export default function Button(props: any) {
  return (
    <div className="w-fit font-title mx-auto mt-32">
      <button
      className="py-1 px-7 text-lg uppercase border-2 border-primary"
      onClick={props.onClick} >
        {props.text}
      </button>
    </div>

  )

}
