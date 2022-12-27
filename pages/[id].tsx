import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Header from "../components/Header";
import Lightbox from "../components/Lightbox";
import SlideshowContent from "../components/SlideshowContent";
import SlideshowNav from "../components/SlideshowNav";
import { libreBaskerville } from "../lib/font";
import { getJsonData } from "../lib/fsFunctions";
import { kebabCase } from "../lib/functions";
import {PaintingData} from '../lib/types';

export default function Painting({
  painting,
  urlPathPrev,
  urlPathNext
} : {
  painting: PaintingData,
  urlPathPrev: string,
  urlPathNext: string
}) {

  const [isLightboxOn, setIsLightboxOn] = useState(false);

  return (
    <>
      <Head>
        <title>{painting.name}</title>
      </Head>
      <header className={libreBaskerville.className}>
        <Header isSlideshowOn={true}/>
      </header>
      <main className={libreBaskerville.className}>
        <SlideshowContent
          painting={painting}
          setIsLightboxOn={setIsLightboxOn}
        />
      </main>
      <nav className={libreBaskerville.className}>
        <SlideshowNav
          painting={painting}
          urlPathPrev={urlPathPrev}
          urlPathNext={urlPathNext}
        />
      </nav>
      {isLightboxOn &&
        <Lightbox
          painting={painting}
          setIsLightboxOn={setIsLightboxOn}
        />}
    </>
  );
}

export async function getStaticProps(
  {params} : {params: {id: string}}
) {

  const paintings = await getJsonData();

  const painting = paintings.filter((painting) =>
    kebabCase(painting.name) === params.id
  )[0];
  
  const urlPathPrev = 
    paintings[painting.metadata.index - 1]
    ? kebabCase(paintings[painting.metadata.index - 1].name)
    : '';

  const urlPathNext = 
    paintings[painting.metadata.index + 1]
    ? kebabCase(paintings[painting.metadata.index + 1].name)
    : '';

  return {
    props: {painting, urlPathPrev, urlPathNext}
  }
}

export async function getStaticPaths() {
  const paintings = await getJsonData();

  return {
    paths: 
    paintings.map((painting) =>
      ({params: {id: kebabCase(painting.name)}})
    ),
      fallback: false
  }
}
