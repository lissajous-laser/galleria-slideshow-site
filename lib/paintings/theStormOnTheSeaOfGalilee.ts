import artist from "../../components/the-storm-on-the-sea-of-galilee/TheStormOnTheSeaOfGalileeArtist";
import gallery from "../../components/the-storm-on-the-sea-of-galilee/TheStormOnTheSeaOfGalileeGallery";
import heroSmall from "../../components/the-storm-on-the-sea-of-galilee/TheStormOnTheSeaOfGalileeHeroSmall";
import thumbnail from "../../components/the-storm-on-the-sea-of-galilee/TheStormOnTheSeaOfGalileeThumbnail";
import data from '../../public/data.json';
import { PaintingData } from "../types";

export const theStormOnTheSeaOfGalilee: PaintingData = {
  ...data[4],
  images: {
    hero: {
      small: heroSmall
    },
    gallery: gallery,
    thumbnail: thumbnail,
    artist: artist,
  }  
}