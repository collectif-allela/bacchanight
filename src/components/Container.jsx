
export default function Container(props) {
  const {children} = props
  return (
    <div className="h-full w-full bg-red-300">
{children}
    </div>
  )
}
