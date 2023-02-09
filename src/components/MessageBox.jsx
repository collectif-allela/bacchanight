
export default function MessageBox(props) {

  return (
    <div className='p-4 z-50 text-primary border-primary border-2 rounded-md bg-primary bg-opacity-20'>
        <p className=' text-xl'>{props.text}</p>
        {props.children}
    </div>
  )
}
