
// This page is the home page
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Paint from '@/components/Paint'
import MessageBox from '@/components/MessageBox'
import { useState } from "react"
import Score from '@/components/Score'
import Container from '@/components/Container'
import Button from "../components/Button"
import Title from '@/components/Title'
import Text from '@/components/Text'
import bg from '../../public/game1jaune.jpg'
import TypeIt from "typeit-react";


export default function Game1() {
  const [score, setScore]= useState(0);
  const [scene, setScene]= useState(0);

  const scoreToWin = 7;

  function increaseScore(){
    // Add point to score
    setScore(score + 1);
    if (score == scoreToWin - 1) {
      setScene(3);
    }
  };

  function changeScene(){
    setScene(scene + 1);
  }

  <Head>
  <title>Game 1</title>
  <meta name="description" content="Generated by create next app" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" href="/favicon.ico" />
  </Head>

  switch (scene) {
    case 1:
    return (
      <div className='relative'>
      <Paint itemClick={increaseScore} class="max-w-none " src="/jour_des_morts.jpg"/>
      <Score score={score}/>
      </div>
      )
      case 2:
      return (
        <div className='relative'>
        <Paint itemClick={increaseScore} class="max-w-none " src="/jour_des_morts.jpg"/>
        <Score score={score}/>
        </div>
        )
        case 3:
        return (
          <div className='w-screen h-screen px-4 pt-12'>
          <Title text ="bravo"/>
          <div className='h-5/6 flex flex-col justify-between'>
            <div className='mt-12 w-full'>
            <h3 className='text-primary uppercase'>
              <TypeIt options={{
              strings: ["IDENTIFICATION DES ERREURS : COMPLETE ","objectif : atteint"],
              speed: 10,
              waitUntilVisible: true,
              }}>
              </TypeIt>
            </h3>
            </div>
            <MessageBox>
            <TypeIt options={{
              strings: ["Passez au niveau suivant"],
              speed: 10,
              waitUntilVisible: true,
              startDelay: 4000,
              }} className="text-primary">
            </TypeIt>
          {/* <Text text="En réalité, je vous ai proposé cette expérience pour répondre à une problématique grandissante : la consommation toujours plus rapides des œuvres d’art présentées dans les musées."/> */}
          </MessageBox>
          <div className='mx-auto'>
          <Link href="/game2"><Button text="SUIVANT"/></Link>
          </div>
          </div>
          </div>
          )
          default:
          return (

            <div className='h-screen relative overflow-hidden'>
            <img className='absolute h-screen max-w-none z-0' src="/game1jaune.jpg" alt="" />
            <Container>
            <div className='h-screen flex flex-col justify-center'>

            <div className='w-full bg-black bg-opacity-70 p-4 rounded-md border-2 border-primary z-50'>
            <div className='flex flex-col gap-y-16'>
            <div className='w-full text-center'>
            <Title text="TROUVEZ LES 7 ERREURS"/>
            <span className='font-offbit text-primary'>Niveau 1</span>
            </div>
            <TypeIt
              options={{
              strings: ["Déplacez-vous dans les tableau pour trouver les erreurs."," ",
              "Générez la réinterprétation de l’histoire en cliquant sur les erreurs."],
              speed: 10,
              waitUntilVisible: true,

            }}className ="text-primary">
            </TypeIt>
            <div className='w-full flex justify-center'>
            <Button text="Jouer" onClick={changeScene}/>
            </div>
            </div>
            </div>
            </div>
            </Container>
            </div>
            )
          }

        }
