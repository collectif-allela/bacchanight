
// This page is the home page
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Paint from '@/components/Paint';
import MessageBox from '@/components/MessageBox';
import { useState } from "react";
import Container from '@/components/Container';
import Button from "../components/Button";
import Title from '@/components/Title';
import Text from '@/components/Text';
import bg from '../../public/game1jaune.jpg';
import Intro from '@/components/Intro';
import TypeIt from 'typeit-react';


export default function Score() {
  const [scene, setScene]= useState(0);

  function changeScene(){
    setScene(scene + 1);
  }
  const [slide, setSlide] = useState(0);
  // const container = useRef(null);

  const handleNext = () => {
    setSlide(slide + 1)
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
        <Title text="case 1"/>
      </div>
      )
          default:
          return (
            
            <Container>
            <Intro>
            <Title text="statistiques"/>
            <div className='text-primary flex flex-col w-full items-center gap-y-4'>
              <span>
                Les visiteurs passent en moyenne seulement 30 secondes devant un tableau.
              </span>
              <div>
              <span className='font-offbit text-5xl'>3:30</span>
              </div>
            </div>
            <MessageBox>
            <TypeIt options={{
            strings: ["Les différences que j’ai dissimulées n’étaient qu’un prétexte pour vous faire apprécier les détails que le peintre a imaginés..."],
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
          }
          
        }
        