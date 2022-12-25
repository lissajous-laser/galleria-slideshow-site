import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Home.module.scss'
import Header from '../components/Header'
import Tiles from '../components/Tiles'
import { libreBaskerville } from '../lib/font'

export default function Home() {
  return (
    <>
      <Head>
        <title>Galleria Slidehow Site</title>
        <meta name="description" content="Frontend Mentor Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
        <main className={libreBaskerville.className}>
          <Tiles/>
        </main>
    </>
  )
}
