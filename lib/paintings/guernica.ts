import artist from "../../components/guernica/GuernicaArtist";
import gallery from "../../components/guernica/GuernicaGallery";
import heroSmall from "../../components/guernica/GuernicaHeroSmall";
import thumbnail from "../../components/guernica/GuernicaThumbnail";
import data from '../../public/data.json';
import { paintingData } from "../types";

export const guernica: paintingData = {
  ...data[2],
  images: {
    hero: {
      small: heroSmall
    },
    gallery: gallery,
    thumbnail: thumbnail,
    artist: artist,
  }  
}
