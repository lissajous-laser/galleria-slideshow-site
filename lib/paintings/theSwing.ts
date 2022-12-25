import artist from "../../components/the-swing/TheSwingArtist";
import gallery from "../../components/the-swing/TheSwingGallery";
import heroSmall from "../../components/the-swing/TheSwingHeroSmall";
import thumbnail from "../../components/the-swing/TheSwingThumbnail";
import data from '../../public/data.json';
import { paintingData } from "../types";

export const theSwing: paintingData = {
  ...data[14],
  images: {
    hero: {
      small: heroSmall
    },
    gallery: gallery,
    thumbnail: thumbnail,
    artist: artist,
  }  
}
