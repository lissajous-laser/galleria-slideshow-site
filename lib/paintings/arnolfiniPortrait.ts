import artist from "../../components/arnolfini-portrait/ArnolfiniPortraitArtist";
import gallery from "../../components/arnolfini-portrait/ArnolfiniPortraitGallery";
import heroSmall from "../../components/arnolfini-portrait/ArnolfiniPortraitHeroSmall";
import thumbnail from "../../components/arnolfini-portrait/ArnolfiniPortraitThumbnail";
import data from '../../public/data.json';
import { paintingData } from "../types";

export const arnolfiniPortrait: paintingData = {
  ...data[12],
  images: {
    hero: {
      small: heroSmall
    },
    gallery: gallery,
    thumbnail: thumbnail,
    artist: artist,
  }  
}
