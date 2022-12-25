import TileColumn from "./TileColumn";
import { makeListOfPaintingColumns } from "../lib/functions";
import { ladyWithAnErmine } from "../lib/paintings/ladyWithAnErmine";
import { theStormOnTheSeaOfGalilee } from '../lib/paintings/theStormOnTheSeaOfGalilee';
import { starryNight } from "../lib/paintings/starryNight";
import { theBoyInTheRedVest } from "../lib/paintings/boyWithTheRedVest";
import style from '../styles/Tiles.module.scss';
import { girlWithPearlEarring } from "../lib/paintings/girlWithPearlEarring";
import { theGreatWaveOffKanagawa } from "../lib/paintings/theGreatWaveOfKanagawa";
import { theNightCafe } from "../lib/paintings/theNightCafe";
import { arnolfiniPortrait } from "../lib/paintings/arnolfiniPortrait";
import { guernica } from "../lib/paintings/guernica";
import { vanGoghSelfPortrait } from "../lib/paintings/vanGoghSelfPortrait";
import { monaLisa } from "../lib/paintings/monaLisa";
import { penitentMagdalene } from "../lib/paintings/pentitentMagdalene";
import { theSleepingGypsy } from "../lib/paintings/theSleepingGypsy";
import { theBasketOfApples } from "../lib/paintings/theBasketOfApples";
import { theSwing } from "../lib/paintings/theSwing";

/**
 * Shows tiled clickable painting picturs.
 */
export default function Tiles() {
  const listOfPaintingCols = makeListOfPaintingColumns();

  return (
    <section className={style.container}>
      <TileColumn paintings={[
        starryNight,
        theStormOnTheSeaOfGalilee,
        ladyWithAnErmine,
        theBoyInTheRedVest
      ]}/>
      <TileColumn paintings={[
        girlWithPearlEarring,
        theGreatWaveOffKanagawa,
        theNightCafe,
        arnolfiniPortrait
      ]}/>
      <TileColumn paintings={[
        guernica,
        vanGoghSelfPortrait,
        monaLisa
      ]}/>
      <TileColumn paintings={[
        penitentMagdalene,
        theSleepingGypsy,
        theBasketOfApples,
        theSwing
      ]}/>
    </section>
  );
}