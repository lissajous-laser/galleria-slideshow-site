import artist from "../../components/the-night-cafe/TheNightCafeArtist";
import gallery from "../../components/the-night-cafe/TheNightCafeGallery";
import heroSmall from "../../components/the-night-cafe/TheNightCafeHeroSmall";
import thumbnail from "../../components/the-night-cafe/TheNightCafeThumbnail";
import data from '../../public/data.json';
import { PaintingData } from "../types";

export const theNightCafe: PaintingData = {
  ...data[9],
  images: {
    hero: {
      small: heroSmall
    },
    gallery: gallery,
    thumbnail: thumbnail,
    artist: artist,
  }  
}
