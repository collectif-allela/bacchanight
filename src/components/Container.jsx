import Title from "./Title";


export default function Container(props) {

  return (
    <div className="p-8 pt-16 h-screen text-primary font-body">
    <Title text={props.title}/>
    <div className='h-96 relative text-primary mt-12  border-primary border-2 rounded-md '>
      <div className='h-full bg-primary bg-opacity-20  mt10' >
        <p className=' text-2xl  p-5  leading-2 '>{props.text}</p>
      </div>
      {props.children}
    </div>
    </div>

  )
}
