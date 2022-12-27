import TileColumn from "./TileColumn";
import { paintingIdxByColumnLg } from "../lib/data";
import style from '../styles/Tiles.module.scss';
import data from '../public/data.json';

/**
 * Shows tiled clickable painting picturs.
 */
export default function Tiles() { 

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