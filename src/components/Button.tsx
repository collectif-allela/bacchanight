import React from "react"

export default function Button(props: any) {
  return (
      <button
      className="font-title text-primary py-1 px-7 text-lg uppercase border-2 border-primary"
      onClick={props.onClick} >
        {props.text}
      </button>

  )

}
