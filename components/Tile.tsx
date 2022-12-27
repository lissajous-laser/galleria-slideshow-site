import Image from "next/image";
import Link from "next/link";
import { libreBaskerville } from "../lib/font";
import { kebabCase } from "../lib/functions";
import { PaintingData } from "../lib/types";
import style from '../styles/Tile.module.scss';

export default function Tile({painting} : {painting: PaintingData}) {
  return (
    <Link
      className={`${style.container} ${libreBaskerville.className}`}
      href={`/${kebabCase(painting.name)}`}
    >
      <Image
        src={painting.images.thumbnail.substring(1)}
        alt={painting.name}
        style={{display: 'block'}}
        width={painting.metadata.thumbnail.width}
        height={painting.metadata.thumbnail.height}
      />
      <div className={style.gradient}>
        <article className={style.text}>
          <h2 className={style.name}>{painting.name}</h2>
          <p className={style.artist}>{painting.artist.name}</p>
        </article>
      </div>
      <div className={style.hoverHighlight}/>
    </Link>
  );
}