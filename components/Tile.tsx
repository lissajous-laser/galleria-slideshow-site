import { Stint_Ultra_Expanded } from "@next/font/google";
import Image from "next/image";
import { libreBaskerville } from "../lib/font";
import { paintingData } from "../lib/types";
import style from '../styles/Tile.module.scss';

export default function Tile({painting} : {painting: paintingData}) {
  return (
    <button className={`${style.container} ${libreBaskerville.className}`}>
      <painting.images.thumbnail alt={painting.name}/>
      <div className={style.gradient}>
        <article className={style.text}>
          <h2 className={style.name}>{painting.name}</h2>
          <p className={style.artist}>{painting.artist.name}</p>
        </article>
      </div>
    </button>
  );
}