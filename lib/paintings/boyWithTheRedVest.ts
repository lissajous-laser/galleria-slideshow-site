import artist from "../../components/the-boy-in-the-red-vest/TheBoyInTheRedVestArtist";
import gallery from "../../components/the-boy-in-the-red-vest/TheBoyInTheRedVestGallery";
import heroSmall from "../../components/the-boy-in-the-red-vest/TheBoyInTheRedVestHeroSmall";
import thumbnail from "../../components/the-boy-in-the-red-vest/TheBoyInTheRedVestThumbnail";
import data from '../../public/data.json';
import { paintingData } from "../types";

export const theBoyInTheRedVest: paintingData = {
  ...data[11],
  images: {
    hero: {
      small: heroSmall
    },
    gallery: gallery,
    thumbnail: thumbnail,
    artist: artist,
  }  
}
