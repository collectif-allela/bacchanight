
export default function MessageBox(props) {

  return (
    <div className="w-full bg-primary bg-opacity-20 p-4 rounded-md border-2 border-primary z-50">
        {props.children}
    </div>
  )
}
