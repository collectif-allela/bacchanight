
// This page is the home page
import Head from 'next/head'
import Image from 'next/image'
import { useState } from "react";
import Button from "../components/Button"
import Link from 'next/link'
import Title from '../components/Title'

export default function Paints(){
  return(
  <>
      <Head>
        <title>Download</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className='h-screen flex flex-col gap-y-24 justify-center items-center text-center relative'>
          <h1 className='uppercase text-3xl text-primary'>Voici les oeuvres infectées</h1>
          <div className='flex-col flex gap-y-12'>
            <img className='w-[300px] h-auto' src="jour_des_mort.png" alt="" />
            <img className='w-[300px] h-auto' src="waterloo_jaune.png" alt="" />
          </div>
    
          <Link className='text-primary 'href="/game1"><Button text="COMMENCER LE JEU"/></Link>
        </div>
    </>
  )
}
