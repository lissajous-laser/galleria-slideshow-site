import { GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";
import { listOfPaintings } from "../lib/data";
import { getJsonData } from "../lib/fsFunctions";
import { kebabCase } from "../lib/functions";
import {PaintingData} from '../lib/types';
import data from '../public/data.json';

export default function Painting({painting} : {painting: PaintingData}) {

  return (
    <>
      <Head>
        <title></title>
      </Head>
      {painting.artist.name}
    </>
  );
}

export async function getStaticProps(
  {params} : {params: {id: string}}
) {

  const paintings = await getJsonData();

  return {
    props: {
      painting: paintings && paintings.filter((painting) =>
        kebabCase(painting.name) === params.id
      )[0]
    }
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
