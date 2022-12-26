import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Home.module.scss'
import Header from '../components/Header'
import Tiles from '../components/Tiles'
import { libreBaskerville } from '../lib/font'
import { useState } from 'react'

export default function Home() {
  // Sets modal window for painting windows is shown. -1 represents
  // no window, other numbers represent index in slideshow.
  const [paintingDetail, setPaintingDetail] = useState(-1);
  // State of whether lightbox is on. Can only be on when
  // paintingDetail !== -1.
  const [isLightboxOn, setIsLightboxOn] = useState(false);
  // State of scroll vertical position when no modal windows are
  // open.
  const [scrollYPos, setScrollYPos] = useState(0);

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
