import { paintingData } from "../lib/types";
import style from '../styles/TileColumn.module.scss';
import Tile from "./Tile";

/**
 * A flex column of paintings.
 */
export default function TileColumn({paintings} : {paintings: paintingData[]}) {
  return (
    <div className={style.container}>
      {paintings.map((painting) => (
        <Tile painting={painting} key={painting.name}/>
      ))}
    </div>
  );
}