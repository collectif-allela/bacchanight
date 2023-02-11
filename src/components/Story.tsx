import TypeIt from "typeit-react";
import Text from "@/components/Text";

export default function Story(props: any) {

switch (props.storyPart) {
  case 1:
    return (
      <div className='fixed top-5 z-50 w-screen'>
      <div i className='mx-4 p-2 border-2 border-primary/50 bg-black/70 rounded-md'>
        <div className="flex justify-center">
          <div  className="flex w-10/12 max-w-3xl flex-col items-start gap-y-3">
            <input type="checkbox" id="input4" className="default:checked: peer absolute hidden"   />
            <label htmlFor="input4" className="w-full text-center font-offbit text-primary peer-checked:text-primary underline">
              Lire l`histoire
              <img src="./dropdown.svg" className="peer-checked:hidden mx-auto absolute right-[48%] bottom-[-10px] w-5 " alt="" />
            </label>
            <div className="hidden overflow-hidden default:hidden peer-checked:block">
              <p className="text-primary">Le Jour des morts représente une mère et sa fille pleurant la perte d’un mari et d’un père au pied d’une croix tumulaire. </p>
              <Text text="L’artiste emploie le champ lexical de la mort avec le noir," className="text-primary"> </Text>
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
              <p className="text-primary">Le Jour des morts représente une mère et sa fille pleurant la perte d’un mari et d’un père au pied d’une croix tumulaire. L’artiste emploie le champ lexical de la mort avec le noir,<TypeIt
            options={{
              strings: [" les couronnes d’immortelles, la croix, l’hiver. "],
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
              <p className="text-primary">Le Jour des morts représente une mère et sa fille pleurant la perte d’un mari et d’un père au pied d’une croix tumulaire. L’artiste emploie le champ lexical de la mort avec le noir, les couronnes d’immortelles, la croix, l’hiver. </p>
              <Text text="Les critiques de l’époque saluèrent « la modernité du sujet » (Mathilde Stevens),"/>
            
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

              
              <p className="text-primary">Le Jour des morts représente une mère et sa fille pleurant la perte d’un mari et d’un père au pied d’une croix tumulaire. L’artiste emploie le champ lexical de la mort avec le noir, les couronnes d’immortelles, la croix, l’hiver. Les critiques de l’époque saluèrent « la modernité du sujet » (Mathilde Stevens),
              <TypeIt
            options={{
              strings: [" traduite par une expression réaliste de la douleur et son humanité (Maxime Ducamp)."],
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
                Le Jour des morts représente une mère et sa fille pleurant la perte d’un mari et d’un père au pied d’une croix tumulaire. L’artiste emploie le champ lexical de la mort avec le noir, les couronnes d’immortelles, la croix, l’hiver. Les critiques de l’époque saluèrent « la modernité du sujet » (Mathilde Stevens), traduite par une expression réaliste de la douleur et son humanité (Maxime Ducamp). </p>
                <Text text="Dans ses œuvres, Bouguereau, avec son aptitude à faire coïncider le rêve et la réalité,"/>

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

                  <p className="text-primary">Le Jour des morts représente une mère et sa fille pleurant la perte d’un mari et d’un père au pied d’une croix tumulaire. L’artiste emploie le champ lexical de la mort avec le noir, les couronnes d’immortelles, la croix, l’hiver. Les critiques de l’époque saluèrent « la modernité du sujet » (Mathilde Stevens), traduite par une expression réaliste de la douleur et son humanité (Maxime Ducamp).
    Dans ses œuvres, Bouguereau, avec son aptitude à faire coïncider le rêve et la réalité,
    <TypeIt
            options={{
              strings: [" exprime les valeurs qui lui sont chères : la culture classique, le bonheur familial, l’espérance en la vie, la foi chrétienne."],
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
              strings: ["Le Jour des morts représente une mère et sa fille pleurant la perte d’un mari et d’un père au pied d’une croix tumulaire."],
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
