import TypeIt from "typeit-react";
import Text from "@/components/Text";

export default function Story(props: any) {

switch (props.storyPart) {
  case 1:
    return (
      <div className='fixed top-5 z-50 w-screen'>
      <div className='mx-4 p-2 border-2 border-primary/50 bg-black/70 rounded-md'>
        <div className="flex justify-center">
          <div  className="flex w-10/12 max-w-3xl flex-col items-start gap-y-3">
            <input type="checkbox" id="input4" className="default:checked: peer absolute hidden"   />
            <label htmlFor="input4" className="w-full text-center font-offbit text-primary peer-checked:text-primary underline">
              Lire l`histoire
              <img src="./dropdown.svg" className="peer-checked:hidden mx-auto absolute right-[48%] bottom-[-10px] w-5 " alt="" />
            </label>
            <div className="hidden overflow-hidden default:hidden peer-checked:block">
              <p className="text-primary">La mère et la fille s’étaient rendues sur la tombe du père de famille. </p>
              <Text text="Le diable grimé en civil, dont on voyait la queue dépasser de sa veste, leur proposa un marché " className="text-primary"> </Text>
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
            <label htmlFor="input4" className="w-full text-center font-offbit text-primary peer-checked:text-primary underline">
              Lire l`histoire
              <img src="./dropdown.svg" className="peer-checked:hidden mx-auto absolute right-[48%] bottom-[-10px] w-5" alt="" />
            </label>
            <div className="hidden overflow-hidden default:hidden peer-checked:block">
              <p className="text-primary">La mère et la fille s’étaient rendues sur la tombe du père de famille. Le diable grimé en civil, dont on voyait la queue dépasser de sa veste, leur proposa un marché<TypeIt
            options={{
              strings: [" : sous forme de jeu rappelant la fête foraine."],
              speed: 10,
              waitUntilVisible: true,
            }}className ="text-primary">
          </TypeIt></p>
              {/* <Text text=" les couronnes d’immortelles, la croix, l’hiver. "/> */}
              
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
            <label htmlFor="input4" className="w-full text-center font-offbit text-primary peer-checked:text-primary underline">
              Lire l`histoire
              <img src="./dropdown.svg" className="peer-checked:hidden mx-auto absolute right-[48%] bottom-[-10px] w-5" alt="" />
            </label>
            <div className="hidden overflow-hidden default:hidden peer-checked:block">
              <p className="text-primary">La mère et la fille s’étaient rendues sur la tombe du père de famille. Le diable grimé en civil, dont on voyait la queue dépasser de sa veste, leur proposa un marché sous forme de jeu rappelant la fête foraine.</p>
              <Text text="« Si vous arrivez à jeter le cerceau autour de la pierre tombale de votre mari, "/>
            
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
            <label htmlFor="input4" className="w-full text-center font-offbit text-primary peer-checked:text-primary underline">
              Lire l`histoire
              <img src="./dropdown.svg" className="peer-checked:hidden mx-auto absolute right-[48%] bottom-[-10px] w-5" alt="" />
            </label>
            <div className="hidden overflow-hidden default:hidden peer-checked:block">

              
              <p className="text-primary">La mère et la fille s’étaient rendues sur la tombe du père de famille. Le diable grimé en civil, dont on voyait la queue dépasser de sa veste, leur proposa un marché sous forme de jeu rappelant la fête foraine.
« Si vous arrivez à jeter le cerceau autour de la pierre tombale de votre mari, 
              <TypeIt
            options={{
              strings: [" je le ramènerai à la vie, sinon je prendrais celle de votre fille »."],
              speed: 10,
              waitUntilVisible: true,
            }}className ="text-primary">
          </TypeIt> </p>
              
              
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
            <label htmlFor="input4" className="w-full text-center font-offbit text-primary peer-checked:text-primary underline">
              Lire l`histoire
              <img src="./dropdown.svg" className="peer-checked:hidden mx-auto absolute right-[48%] bottom-[-10px] w-5" alt="" />
            </label>
            <div className="hidden overflow-hidden default:hidden peer-checked:block">

              <p className="text-primary">
              La mère et la fille s’étaient rendues sur la tombe du père de famille. Le diable grimé en civil, dont on voyait la queue dépasser de sa veste, leur proposa un marché sous forme de jeu rappelant la fête foraine.
« Si vous arrivez à jeter le cerceau autour de la pierre tombale de votre mari, je le ramènerai à la vie, sinon je prendrais celle de votre fille ».</p>
                <Text text="La mère accepta et se rendit compte seulement après les 3 lancers, "/>

              </div>
            </div>
          </div>
        </div>
      </div>
            )
        case 6:
        return (
          <div className='fixed top-5 z-50 w-screen'>
          <div className='mx-4 p-2 border-2 border-primary/50 bg-black/70 rounded-md'>
            <div className="flex justify-center">
              <div className="flex w-10/12 max-w-3xl flex-col items-start gap-y-3">
                <input type="checkbox" id="input4" className="default:checked: peer absolute hidden" />
                <label htmlFor="input4" className="w-full text-center font-offbit text-primary peer-checked:text-primary underline">
              Lire l`histoire
              <img src="./dropdown.svg" className="peer-checked:hidden mx-auto absolute right-[48%] bottom-[-10px] w-5" alt="" />
            </label>
                <div className="hidden overflow-hidden default:hidden peer-checked:block">

                  <p className="text-primary">La mère et la fille s’étaient rendues sur la tombe du père de famille. Le diable grimé en civil, dont on voyait la queue dépasser de sa veste, leur proposa un marché sous forme de jeu rappelant la fête foraine.
« Si vous arrivez à jeter le cerceau autour de la pierre tombale de votre mari, je le ramènerai à la vie, sinon je prendrais celle de votre fille ».
La mère accepta et se rendit compte seulement après les 3 lancers, 
    <TypeIt
            options={{
              strings: [" que le cerceau n’était pas assez grand pour glisser autour du réceptacle…"],
              speed: 10,
              waitUntilVisible: true,
            }}className ="text-primary">
          </TypeIt>
    
 </p>
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
            <label htmlFor="input4" className="w-full text-center font-offbit text-primary peer-checked:text-primary underline">
              Lire l`histoire
              <img src="./dropdown.svg" className="peer-checked:hidden mx-auto absolute right-[48%] bottom-[-10px] w-5" alt="" />
            </label>
            <div className="hidden overflow-hidden default:hidden peer-checked:block">
            <TypeIt
            options={{
              strings: ["La mère et la fille s’étaient rendues sur la tombe du père de famille. "],
              speed: 10,
              waitUntilVisible: true,
            }}className ="text-primary">
          </TypeIt>
              {/* <p className="text-primary">Le Jour des morts représente une mère et sa fille pleurant la perte d’un mari et d’un père au pied d’une croix tumulaire. </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
          )
        }
      }
