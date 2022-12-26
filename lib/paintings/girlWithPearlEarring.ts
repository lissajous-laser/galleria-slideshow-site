import artist from "../../components/girl-with-pearl-earring/GirlWithPearlEarringArtist";
import gallery from "../../components/girl-with-pearl-earring/GirlWithPearlEarringGallery";
import heroSmall from "../../components/girl-with-pearl-earring/GirlWithPearlEarringHeroSmall";
import thumbnail from "../../components/girl-with-pearl-earring/GirlWithPearlEarringThumbnail";
import data from '../../public/data.json';
import { PaintingData } from "../types";

export const girlWithPearlEarring: PaintingData = {
  ...data[1],
  images: {
    hero: {
      small: heroSmall
    },
    gallery: gallery,
    thumbnail: thumbnail,
    artist: artist,
  }  
}
