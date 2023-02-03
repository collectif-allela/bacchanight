
// This page is the home page
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Container from "@/components/Container"
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Head>
        <title>D-TEYE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1 className='text-primary font-bold'>COUCOUUUU</h1>
        </div>
        <Container>
          <Grid slide="1">
              <Item name="header">
                  <Header/>
              </Item>
              <Item name="illustration">
                  <Illustration width={90} src="/illustrations/painting.png" alt=""/>
              </Item>
              <Item name="dialog">
                  <Dialog name="KURT :">Maman, comment devenir un grand artiste ?</Dialog>
              </Item>
              <Item name="button">
                  <Button arrow="right" onClick={handleNext}>
                      Continuer
                  </Button>
              </Item>
          </Grid>
        </Container>
        <Link href="/paints" className='text-white'>
          Peinturesz
        </Link>
      </main>
    </>
  )
}
