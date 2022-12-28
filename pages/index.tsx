import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Home.module.scss'
import Header from '../components/Header'
import Tiles from '../components/Tiles'
import { libreBaskerville } from '../lib/font'
import { useLayoutEffect, useState } from 'react'

export default function Home() {
  // State of scroll vertical position.
  const [scrollYPos, setScrollYPos] = useState(0);
  const [winWidth, setWinWidth] = useState(0);

  useLayoutEffect(() => {
    const callbackFn = () => {
      setWinWidth(window.innerWidth)
    };
    window.addEventListener('resize', callbackFn);

    return () => {
      removeEventListener('resize', callbackFn);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Galleria Slidehow Site</title>
        <meta name="description" content="Frontend Mentor Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <header className={libreBaskerville.className}>
          <Header isSlideshowOn={false}/>
        </header>
        <nav className={libreBaskerville.className}>
          <Tiles/>
        </nav>
    </>
  )
}
