import TypeIt from "typeit-react";
export default function Story(props: any) {


  
  return (
    <div className='fixed top-5 z-50 w-screen'>
    <div className='mx-4 p-6 border-2 border-primary/50 bg-black/70 rounded-md'>
      <div className="flex justify-center">
        <div className="flex w-10/12 max-w-3xl flex-col items-start gap-y-3">
          <input type="checkbox" id="input4" className="default:checked: peer absolute hidden" />
          <label htmlFor="input4" className="w-full text-center font-offbit text-primary peer-checked:text-primary">Lire l`histoire</label>
          <div className="hidden overflow-hidden default:hidden peer-checked:block">
            <p className="text-primary">{props.text}</p>
            </div>
            <span className="h-[1px] w-full bg-primary"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
