import TypeIt from "typeit-react";
export default function Text(props: any) {

  return (
    <TypeIt options={{
      strings: [props.text],
      speed: 10,
      waitUntilVisible: true,
    }}className ="text-primary">
  </TypeIt>
  )
}
