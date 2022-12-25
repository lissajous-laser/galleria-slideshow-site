import artist from "../../components/starry-night/StarryNightArtist";
import gallery from "../../components/starry-night/StarryNightGallery";
import heroSmall from "../../components/starry-night/StarryNightHeroSmall";
import thumbnail from "../../components/starry-night/StarryNightThumbnail";
import data from '../../public/data.json';
import { paintingData } from "../types";

export const starryNight: paintingData = {
  ...data[0],
  images: {
    hero: {
      small: heroSmall
    },
    gallery: gallery,
    thumbnail: thumbnail,
    artist: artist,
  }  
}
