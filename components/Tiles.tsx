import TileColumn from "./TileColumn";
import { makeListOfPaintingColumns } from "../lib/functions";
import { ladyWithAnErmine } from "../lib/paintings/ladyWithAnErmine";
import { theStormOnTheSeaOfGalilee } from '../lib/paintings/theStormOnTheSeaOfGalilee';
import { starryNight } from "../lib/paintings/starryNight";
import { theBoyInTheRedVest } from "../lib/paintings/boyWithTheRedVest";
import style from '../styles/Tiles.module.scss';


/**
 * Shows tiled clickable painting picturs.
 */
export default function Tiles() {
  const listOfPaintingCols = makeListOfPaintingColumns();

  return (
    <section className={style.container}>
      <TileColumn paintings={[starryNight, theStormOnTheSeaOfGalilee, ladyWithAnErmine, theBoyInTheRedVest]}/>
    </section>
  );
}