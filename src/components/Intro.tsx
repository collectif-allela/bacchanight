export default function Container(props: any) {

  return (
    <div className="h-screen  py-12">
      <div className="h-full flex flex-col justify-between pb-[30%]">
        {props.children}
      </div>
    </div>

  )
}
