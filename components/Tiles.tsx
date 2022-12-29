import TileColumn from "./TileColumn";
import { paintingIdxByColumnLg, paintingIdxByColumnMd } from "../lib/contants";
import style from '../styles/Tiles.module.scss';
import data from '../public/data.json';

/**
 * Shows tiled clickable painting pictures.
 */
export default function Tiles() { 

  return (
    <section className={style.container}>
      {/* 4 column layout */}
      {paintingIdxByColumnLg.map((col) =>
        <div className={style.lg} key={col[0]}>
          <TileColumn
            paintings={col.map((idx) => data[idx])}
          />
        </div>
      )}
      {/* 2 column layout */}
      {paintingIdxByColumnMd.map((col) =>
        <div className={style.md} key={col[0]}>
          <TileColumn
            paintings={col.map((idx) => data[idx])}
          />
        </div>
      )}
      {/* 1 column layout */}
      <div className={style.sm}>
        <TileColumn paintings={data}/>
      </div>
    </section>
  );
}