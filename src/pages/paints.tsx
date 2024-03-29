
// This page is the home page
import Head from 'next/head'
import Image from 'next/image'
import { useState } from "react";
import Button from "../components/Button"
import Link from 'next/link'

export default function Paints(){
  return(
  <>
      <Head>
        <title>Paints</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className='h-screen flex flex-col gap-y-10 justify-center items-center text-center relative'>
          <h1 className='uppercase text-3xl text-primary'>Voici les oeuvres infectées</h1>
          <div className='flex-col flex gap-y-4 text-primary border-y-2 py-4   border-primary/50'>
            <span className='text-lg'>William Bouguereau:</span>
            <span className='opacity-50'>Le Jour des morts, 1859</span>
            <hr className='w-1/6 mx-auto border-primary' ></hr>
            <span className='text-lg'>John-Lewis Brown:</span>
            <span className='px-10 opacity-50'>Bataille du 17 juin 1815 (Waterloo), 1869</span>
          </div>

          <Link className='text-primary 'href="/game1"><Button text="COMMENCER LE JEU"/></Link>
        </div>
    </>
  )
}
