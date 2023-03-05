import TypeIt from "typeit-react";
import Text from "@/components/Text";

export default function Story2(props: any) {

switch (props.storyPart) {
  case 1:
    return (
      <div className='fixed top-5 z-50 w-screen'>
      <div className='mx-4 p-2 border-2 border-primary/50 bg-black/70 rounded-md'>
        <div className="flex justify-center">
          <div className="flex w-10/12 max-w-3xl flex-col items-start gap-y-3">
            <input type="checkbox" id="input4" className="default:checked: peer absolute hidden" />
            <label htmlFor="input4" className="w-full text-center font-redaction text-primary peer-checked:text-primary underline">
              Lire l`histoire
              <img src="./dropdown.svg" className="peer-checked:hidden mx-auto absolute right-[48%] bottom-[-10px] w-5" alt="" />
            </label>
            <div className="hidden overflow-hidden default:hidden peer-checked:block">

              <p className="text-primary">L’escadron avait noué des liens d’amitié fort pendant leurs activités militaires.</p>
              <Text text="Le point commun qui les unissait était le goût de la fête," className="text-primary"> </Text>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  case 2:
  return (
    <div className='fixed top-5 z-50 w-screen'>
      <div className='mx-4 p-2 border-2 border-primary/50 bg-black/70 rounded-md'>
        <div className="flex justify-center">
          <div className="flex w-10/12 max-w-3xl flex-col items-start gap-y-3">
            <input type="checkbox" id="input4" className="default:checked: peer absolute hidden" />
            <label htmlFor="input4" className="w-full text-center font-redaction text-primary peer-checked:text-primary underline">
              Lire l`histoire
              <img src="./dropdown.svg" className="peer-checked:hidden mx-auto absolute right-[48%] bottom-[-10px] w-5" alt="" />
            </label>
            <div className="hidden overflow-hidden default:hidden peer-checked:block">
              <p className="text-primary">L’escadron avait noué des liens d’amitié fort pendant leurs activités militaires. Le point commun qui les unissait était le goût de la fête,</p>
              <Text text='souvent au détriment de leur assiduité.'> </Text>
            </div>
            </div>
          </div>
        </div>
      </div>

    )
    case 3:
    return (
      <div className='fixed top-5 z-50 w-screen'>
      <div className='mx-4 p-2 border-2 border-primary/50 bg-black/70 rounded-md'>
        <div className="flex justify-center">
          <div className="flex w-10/12 max-w-3xl flex-col items-start gap-y-3">
            <input type="checkbox" id="input4" className="default:checked: peer absolute hidden" />
            <label htmlFor="input4" className="w-full text-center font-redaction text-primary peer-checked:text-primary underline">
              Lire l`histoire
              <img src="./dropdown.svg" className="peer-checked:hidden mx-auto absolute right-[48%] bottom-[-10px] w-5" alt="" />
            </label>
            <div className="hidden overflow-hidden default:hidden peer-checked:block">

              <p className="text-primary">L’escadron avait noué des liens d’amitié fort pendant leurs activités militaires. Le point commun qui les unissait était le goût de la fête, souvent au détriment de leur assiduité.</p>
              <Text text='Cette nuit n’avait pas fait exception. Ils avaient bu, dansé et chanté en oubliant d’éteindre le feu.'> </Text>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      )
      case 4:
      return (
      <div className='fixed top-5 z-50 w-screen'>
      <div className='mx-4 p-2 border-2 border-primary/50 bg-black/70 rounded-md'>
        <div className="flex justify-center">
          <div className="flex w-10/12 max-w-3xl flex-col items-start gap-y-3">
            <input type="checkbox" id="input4" className="default:checked: peer absolute hidden" />
            <label htmlFor="input4" className="w-full text-center font-redaction text-primary peer-checked:text-primary underline">
              Lire l`histoire
              <img src="./dropdown.svg" className="peer-checked:hidden mx-auto absolute right-[48%] bottom-[-10px] w-5" alt="" />
            </label>
            <div className="hidden overflow-hidden default:hidden peer-checked:block">

              <p className="text-primary">L’escadron avait noué des liens d’amitié fort pendant leurs activités militaires. Le point commun qui les unissait était le goût de la fête, souvent au détriment de leur assiduité. Cette nuit n’avait pas fait exception. Ils avaient bu, dansé et chanté en oubliant d’éteindre le feu.</p>
              <Text text=' Au réveil, la fumée s’élevait à des dizaines de mètres, '></Text>
              </div>
            </div>
          </div>
        </div>
      </div>
       )
       case 5:
          return (
            <div className='fixed top-5 z-50 w-screen'>
      <div className='mx-4 p-2 border-2 border-primary/50 bg-black/70 rounded-md'>
        <div className="flex justify-center">
          <div className="flex w-10/12 max-w-3xl flex-col items-start gap-y-3">
            <input type="checkbox" id="input4" className="default:checked: peer absolute hidden" />
            <label htmlFor="input4" className="w-full text-center font-redaction text-primary peer-checked:text-primary underline">
              Lire l`histoire
              <img src="./dropdown.svg" className="peer-checked:hidden mx-auto absolute right-[48%] bottom-[-10px] w-5" alt="" />
            </label>
            <div className="hidden overflow-hidden default:hidden peer-checked:block">

              <p className="text-primary">L’escadron avait noué des liens d’amitié fort pendant leurs activités militaires. Le point commun qui les unissait était le goût de la fête, souvent au détriment de leur assiduité. Cette nuit n’avait pas fait exception. Ils avaient bu, dansé et chanté en oubliant d’éteindre le feu. Au réveil, la fumée s’élevait à des dizaines de mètres, </p>
              <Text text='ce qui avait permis a l’ennemi de les repérer et de prendre l’avantage en les surprenant.'></Text>
              </div>
            </div>
          </div>
        </div>
      </div>
            )
      
        default:
        return (
          <div className='fixed top-5 z-50 w-screen'>
      <div className='mx-4 p-2 border-2 border-primary/50 bg-black/70 rounded-md'>
        <div className="flex justify-center">
          <div className="flex w-10/12 max-w-3xl flex-col items-start gap-y-3">
            <input type="checkbox" id="input4" className="default:checked: peer absolute hidden" />
            <label htmlFor="input4" className="w-full text-center font-redaction text-primary peer-checked:text-primary underline">
              Lire l`histoire
              <img src="./dropdown.svg" className="peer-checked:hidden mx-auto absolute right-[48%] bottom-[-10px] w-5" alt="" />
            </label>
            <div className="hidden overflow-hidden default:hidden peer-checked:block">
            <TypeIt
            options={{
              strings: ["L’escadron avait noué des liens d’amitié fort pendant leurs activités militaires."],
              speed: 10,
              waitUntilVisible: true,
            }}className ="text-primary">
          </TypeIt>
              </div>
            </div>
          </div>
        </div>
      </div>
          )
        }
      }
