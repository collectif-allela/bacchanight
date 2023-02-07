import React from "react"

export default function Button(props: any) {
  return (
    <div className="h-auto absolute right-0 bottom-0 font-title">
      <button
      className="p-3 uppercase"
      onClick={props.onClick} >
        {props.text}
      </button>
    </div>

  )

}
