
export default function MessageBox(props) {

  return (
    <div className='relative text-primary border-primary border-2 rounded-md '>
      <div className='h-full bg-primary bg-opacity-20' >
        <p className=' text-xl  p-5  leading-2 '>{props.text}</p>
        {props.children}
      </div>
    </div>
  )
}
