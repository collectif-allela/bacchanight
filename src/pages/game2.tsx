
// This page is the home page
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Paint1 from '@/components/Paint1'
import MessageBox from '@/components/MessageBox'
import { useState } from "react"
import Score from '@/components/Score'
import Container from '@/components/Container'
import Button from "../components/Button"
import Title from '@/components/Title'
import Text from '@/components/Text'
import TypeIt from "typeit-react";
import Story2 from '@/components/Story2'



export default function Game2() {
  const [score, setScore]= useState(0);
  const [scene, setScene]= useState(0);
  const [story, setStory]= useState(0);
  const scoreToWin = 7;

  function increaseScore(){
    // Add point to score
    setScore(score + 1);
    setStory(story + 1);
    if (score == scoreToWin - 1) {
      setScene(2);
    }
  };

  function changeScene(){
    setScene(scene + 1);
  }

  <Head>
  <title>Game 2</title>
  <meta name="description" content="Generated by create next app" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" href="/favicon.ico" />
  </Head>

  switch (scene) {
    case 1:
    return (
      <div className='relative'>
      <Paint1 itemClick={increaseScore} class="max-w-none " src="/waterloo.jpg"/>
      <Story2 storyPart={story}/>
      <Score score={score}/>
      </div>
      )
        case 2:
        return (
          <div className='w-screen h-screen px-4 pt-12'>
          <Title text = "bravo"/>
          <div className='h-5/6 flex flex-col justify-evenly'>
          <div className='mt-12 w-full uppercase font-title text-primary'>
              <TypeIt options={{
                strings: ["IDENTIFICATION DES ERREURS: COMPLÈTE ","objectif: atteint"],
                speed: 10,
                waitUntilVisible: true,
              }}>
            </TypeIt>
          </div>
          <img className='w-4/12 mx-auto' src="/d-teye.png" alt="d-teye image" />

          <div className='w-full bg-primary bg-opacity-20 p-4 rounded-md border-2 border-primary z-50'>
            <TypeIt options={{
            strings: ["En réalité, je vous ai proposé cette expérience pour répondre à une problématique grandissante : la consommation toujours plus rapide des œuvres d’art présentées dans les musées."],
            speed: 10,
            waitUntilVisible: true,
            startDelay: 3000,
          }} className="text-primary"/>
          </div>
          <div className='mx-auto'>
          <Link href="/score"><Button text="SUIVANT"/></Link>
          </div>
          </div>
          </div>
          )
          default:
          return (
            <div className='h-screen relative overflow-hidden'>
            <img className='absolute w-full h-screen max-w-none z-0' src="/game2jaune.svg" alt="" />
            <Container>
              <div className='h-screen w-full flex flex-col justify-center'>

              <div className='w-full bg-black bg-opacity-70 p-4 rounded-md border-2 border-primary z-50'>
              <div className='flex flex-col gap-y-16'>
              <div className='w-full text-center'>
              <Title text="TROUVEZ LES 7 ERREURS"/>
              <span className='font-redaction text-primary'>Niveau 2: Bataille de Waterloo</span>
              </div>
              <TypeIt
              options={{
                strings: ["Vous le savez déjà, déplacez-vous dans le tableau pour trouver les erreurs."," ",
                "Générez l'interprétation de l'histoire en cliquant sur les erreurs."," ","Cette fois sera un peu plus compliqué..."],
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
