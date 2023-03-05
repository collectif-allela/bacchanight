import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'

const redaction = localFont({
  src: '../../public/font/redactionTrial-Bold.ttf',
  variable: '--redaction'
})

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
  <main className={`${offbit.variable} ${aeonik.variable} ${redaction.variable}`}>
  <Component {...pageProps} />
  </main>
)
}
