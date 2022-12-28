import TileColumn from "./TileColumn";
import { paintingIdxByColumnLg, paintingIdxByColumnMd } from "../lib/contants";
import style from '../styles/Tiles.module.scss';
import data from '../public/data.json';

/**
 * Shows tiled clickable painting picturs.
 */
export default function Tiles() { 

  return (
    <section className={style.container}>
      {paintingIdxByColumnLg.map((col) =>
        <div className={style.lg} key={col[0]}>
          <TileColumn
            paintings={col.map((idx) => data[idx])}
          />
        </div>
      )}
      {paintingIdxByColumnMd.map((col) =>
        <div className={style.md} key={col[0]}>
          <TileColumn
            paintings={col.map((idx) => data[idx])}
          />
        </div>
      )}
    </section>
  );
}