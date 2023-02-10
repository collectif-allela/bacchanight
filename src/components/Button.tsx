import React from "react"

export default function Button(props: any) {
  return (
      <button
      className="relative w-fit font-title text-primary py-1 px-7 text-lg uppercase border-2 border-primary z-50"
      onClick={props.onClick} >
        {props.text}
      </button>

  )

}
