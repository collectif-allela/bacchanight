
export default function Container(props:any) {

  return (
    <div className="flex overflow-hidden h-screen justify-center px-4">
    {props.children}
    </div>

  )
}
