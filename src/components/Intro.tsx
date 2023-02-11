export default function Intro(props: any) {

  return (
    <div className="h-full min-w-full py-12">
      <div className="h-full flex flex-col justify-between pb-[20%]">
        {props.children}
      </div>
    </div>

  )
}
