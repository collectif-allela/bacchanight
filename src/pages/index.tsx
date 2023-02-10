
// This page is the home page
import Head from 'next/head';
import Container from "@/components/Container";
import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import Link from 'next/link';
import MessageBox from '@/components/MessageBox';
import Title from '@/components/Title';
import Intro from '@/components/Intro';
import Text from '@/components/Text';
import Script from 'next/script';
// import lottie from 'lottie-web';
import Lottie from 'lottie-react'
import anim from '../../public/animoriginelle.json'
import React from 'react';
import TypeIt from 'typeit-react';


export default function Home(){

  const [slide, setSlide] = useState(0);
  // const container = useRef(null);

  const handleNext = () => {
    setSlide(slide + 1)
  }
  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: container.current,
  //     renderer: 'svg',
  //     loop: false,
  //     autoplay: true,
  //     animationData: anim,
  //     onComplete : handleNext,
  //     rendererSettings: {
  //       preserveAspectRatio: 'xMidYMid slice'
  //     }
  //   })
  // })
  // anim.onComplete = function() {
  //   console.log('complete')
  // }
  // anim.onLoopComplete = function() {
  //   console.log('loopComplete')
  // }

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
            <div className='h-screen flex flex-col justify-evenly items-center py-12 '>
              <img className='w-4/12 mx-auto' src="/d-teye.png" alt="d-teye image" />
            <MessageBox>
            <div className='w-full text-center items-center'>
            <Text text = "INSTALLATION DU PROGRAMME MALVEILLANT"/>
            </div>
            </MessageBox>
            <img src="empty_folder.svg"></img>
            <Button id={slide} text="commencer" onClick={handleNext}  />
            </div>
            </Container>

            )
    case 2:
    return (
      <Container>
      <Intro>
      <Title text="PROGRAMME MALVEILLANT"/>
      <MessageBox>
      <TypeIt options={{
      strings: ["Bonjour. Je suis D-tEye: le virus informatique qui sévit pendant cette bacchanight..."],
      speed: 10,
      waitUntilVisible: true,
    }}className ="text-primary">
  </TypeIt>
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
        <Title text="DESINFORMATION" />
        <MessageBox>
        <Text text = "Les organisateurs m’accusent de désinformation historique car je me suis permis, à dessein, de rajouter quelques éléments sur certains tableaux"/>
        </MessageBox>
        <div className='w-full flex justify-end'>
        <Button id={slide} text="suivant" onClick={handleNext}  />
        </div>
        </Intro>
        </Container>

        )
        case 4:
        return (
          <Container>
          <Intro>
          <Title text="LE SENS DU DETAIL 1/2" />
          <div className='w-full h-40 bg-primary bg-opacity-20 p-4 rounded-md border-2 border-primary z-50'>
          <TypeIt options={{
      strings: ["Aurez-vous l’œil assez aiguisé pour identifier les différences que j’ai dissimulées dans les versions numériques des peintures ?"," "],
      speed: 10,
      waitUntilVisible: true,
    }}className ="text-primary">
  </TypeIt>
          </div>
          <div className='w-full flex justify-end'>
          <Button id={slide} text="SUIVANT" onClick={handleNext}  />
          </div>
          </Intro>
          </Container>

          )
          case 5:
            return (
              <Container>
              <Intro>
              <Title text="LE SENS DU DETAIL 2/2" />
              <div className='w-full h-40 bg-primary bg-opacity-20 p-4 rounded-md border-2 border-primary z-50'>
              <Text text = "Pour le savoir, commencez par télécharger le dossier contenant les œuvres infectées"/>
              </div>
              <div className='w-full flex justify-end'>
              <Button id={slide} text="SUIVANT" onClick={handleNext}  />
              </div>
              </Intro>
              </Container>
    
              )
          case 6:
          return (
            <Container>
            <div className='h-screen flex flex-col justify-center py-12'>
            <div className='w-full bg-primary bg-opacity-20 p-4 rounded-md border-2 border-primary z-50'>
            <div className='w-full text-center justify-center items-center flex-col flex gap-y-10'>
            <img src="empty_folder.svg"></img>
            <Title text = "chargement"/>
            <Link href="/paints"><Button text="page paints"/></Link>
            </div>
            </div>
            </div>
            </Container>

            )
          default:
          return (
            <div className='h-screen w-screen relative'>
              <Lottie  className='h-screen w-auto overflow-hidden' animationData={anim} loop={false} autoplay={true} onComplete={handleNext} />
            </div>

            )
          }
        }
