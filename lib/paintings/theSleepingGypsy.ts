import artist from "../../components/the-sleeping-gypsy/TheSleepingGypsyArtist";
import gallery from "../../components/the-sleeping-gypsy/TheSleepingGypsyGallery";
import heroSmall from "../../components/the-sleeping-gypsy/TheSleepingGypsyHeroSmall";
import thumbnail from "../../components/the-sleeping-gypsy/TheSleepingGypsyThumbnail";
import data from '../../public/data.json';
import { paintingData } from "../types";

export const theSleepingGypsy: paintingData = {
  ...data[7],
  images: {
    hero: {
      small: heroSmall
    },
    gallery: gallery,
    thumbnail: thumbnail,
    artist: artist,
  }  
}
