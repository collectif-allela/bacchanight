import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'

const aeonik = localFont({
  src: '../../public/font/AeonikTRIAL-Regular.otf',
  variable: '--aeonik'
})

const redaction = localFont({
  src: '../../public/font/Redaction50-Bold.otf',
  variable: '--redaction'
})

export default function App({ Component, pageProps }: AppProps) {
return (
  <main className={` ${aeonik.variable} ${redaction.variable}`}>
  <Component {...pageProps} />
  </main>
)
}
