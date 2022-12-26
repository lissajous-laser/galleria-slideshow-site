import TileColumn from "./TileColumn";
import { paintingIdxByColumnLg } from "../lib/data";
import style from '../styles/Tiles.module.scss';
import data from '../public/data.json';

/**
 * Shows tiled clickable painting picturs.
 */
export default function Tiles() { 
  const lets = data;

  return (
    <section className={style.container}>
      {paintingIdxByColumnLg.map((col) =>
        <TileColumn
          paintings={col.map((idx) => data[idx])}
          key={col[0]}
        />
      )}
    </section>
  );
}