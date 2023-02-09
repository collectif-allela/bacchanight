export default function Container(props: any) {

  return (
    <div className="h-screen flex flex-col justify-between py-12">
    {props.children}
    </div>

  )
}
