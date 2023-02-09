
// This page is the home page
import Head from 'next/head'
import Image from 'next/image'
import Container from "@/components/Container"
import { useState } from "react";
import Button from "../components/Button"
import Link from 'next/link'
import MessageBox from '@/components/MessageBox';
import Title from '@/components/Title';
import Intro from '@/components/Intro';
import Text from '@/components/Text';


export default function Home(){
  
  const [slide, setSlide] = useState(0);
  
  const handleNext = () => {
    setSlide(slide + 1)
  }
  <Head>
  <title>D-TEYE</title>
  <meta name="description" content="Generated by create next app" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.ico" />
  </Head>
  
  switch (slide) {
    case 1:
    return (
      <Container>
      <Intro>
      <Title text="DESINFORMATION" />
      <MessageBox>
      <Text text = "Bonjour."/>
      <Text text = "Je suis D-tEye: le virus informatique qui sévit pendant cette bacchanight..."/>
      </MessageBox>
      <div className='w-full flex justify-end'>
      <Button id={slide} text="SUIVANT" onClick={handleNext}  />
      </div>
      </Intro>
      </Container>
      )
      case 2:
      return (
        <Container>
        <Intro>
        <Title text="LE SENS DU DETAIL" />
        <MessageBox>
        <Text text = "Les organisateurs m’accusent de désinformation historique car je me suis permis, à dessein, de rajouter quelques éléments sur certains tableaux"/>
        </MessageBox>
        <div className='w-full flex justify-end'>
        <Button id={slide} text="suivant" onClick={handleNext}  />
        </div>
        </Intro>
        </Container>
        
        )
        case 3:
        return (
          <Container>
          <Intro>
          <Title text="PROGRAMME MALVEILLANT" />
          <MessageBox>
          <Text text = "Aurez-vous l’œil assez aiguisé pour identifier les différences que j’ai dissimulées dans les versions numériques des peintures ? "/>
          <Text text = "Pour le savoir, commencez par télécharger le dossier contenant les œuvres infectées" />
          </MessageBox>
          <div className='w-full flex justify-end'>
          <Button id={slide} text="SUIVANT" onClick={handleNext}  />
          </div>
          </Intro>
          </Container>
          
          )
          case 4:
          return (
            <Container>
            <div className='h-screen flex flex-col justify-center py-12'>
              <MessageBox>
            <div className='w-full text-center justify-center items-center flex-col flex gap-y-10'>
            <img src="empty_folder.svg"></img>
            <Title text = "chargement"/>
            <Link href="/paints"><Button text="page paints"/></Link>
            </div>
            </MessageBox>
              </div>
            </Container>
            
            )
          default:
          return (
            <Container>
            <div className='h-screen flex flex-col justify-center py-12'>
            <MessageBox>
            <div className='w-full text-center items-center flex-col flex my-8 gap-y-10'>
            <img src="empty_folder.svg"></img>
            <Title text = "INSTALLATION du programme MALVEILLANT"/>
            <Button id={slide} text="commencer" onClick={handleNext}  />
            </div>
            </MessageBox>
            <div className='w-full flex justify-end'>
            </div>
            </div>
            </Container>
            
            )
          }
          
          
        }
        