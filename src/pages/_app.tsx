import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'

const offbit = localFont({
  src: '../../public/font/OffBitTrial-Regular.ttf',
  variable: '--offbit'
})

const aeonik = localFont({
  src: '../../public/font/AeonikTRIAL-Regular.otf',
  variable: '--aeonik'
})

export default function App({ Component, pageProps }: AppProps) {
return (
  <main className={`${offbit.variable} ${aeonik.variable}`}>
  <Component {...pageProps} />
  </main>
)
}
