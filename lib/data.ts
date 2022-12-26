import { arnolfiniPortrait } from './paintings/arnolfiniPortrait';
import { theBoyInTheRedVest } from './paintings/boyWithTheRedVest';
import { girlWithPearlEarring } from './paintings/girlWithPearlEarring';
import { guernica } from './paintings/guernica';
import { ladyWithAnErmine } from './paintings/ladyWithAnErmine';
import { monaLisa } from './paintings/monaLisa';
import { penitentMagdalene } from './paintings/pentitentMagdalene';
import { starryNight } from './paintings/starryNight';
import { theBasketOfApples } from './paintings/theBasketOfApples';
import { theGreatWaveOffKanagawa } from './paintings/theGreatWaveOfKanagawa';
import { theNightCafe } from './paintings/theNightCafe';
import { theSleepingGypsy } from './paintings/theSleepingGypsy';
import { theStormOnTheSeaOfGalilee } from './paintings/theStormOnTheSeaOfGalilee';
import { theSwing } from './paintings/theSwing';
import { vanGoghSelfPortrait } from './paintings/vanGoghSelfPortrait';
import { PaintingData } from './types';


export const listOfPaintings: PaintingData[] = [
  starryNight, // 0
  girlWithPearlEarring, // 1
  guernica, // 2
  penitentMagdalene, // 3
  theStormOnTheSeaOfGalilee, // 4
  theGreatWaveOffKanagawa, // 5
  vanGoghSelfPortrait, // 6
  theSleepingGypsy, // 7
  ladyWithAnErmine, // 8
  theNightCafe, // 9
  theBasketOfApples, // 10
  theBoyInTheRedVest, // 11
  arnolfiniPortrait, // 12
  monaLisa, // 13
  theSwing // 14
];

export const paintingIdxByColumnLg = [
  [0, 4, 8, 11],
  [1, 5, 9, 12],
  [2, 6, 13],
  [3, 7, 10, 14]
];

export const paintingIdxByColumnMd = [
  [0, 2, 4, 6, 8, 11, 13],
  [1, 3, 5, 7, 9, 10, 12, 14]
];