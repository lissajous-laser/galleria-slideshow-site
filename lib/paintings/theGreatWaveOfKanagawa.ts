import artist from "../../components/the-great-wave-off-kanagawa/TheGreatWaveOffKanagawaArtist";
import gallery from "../../components/the-great-wave-off-kanagawa/TheGreatWaveOffKanagawaGallery";
import heroSmall from "../../components/the-great-wave-off-kanagawa/TheGreatWaveOffKanagawaHeroSmall";
import thumbnail from "../../components/the-great-wave-off-kanagawa/TheGreatWaveOffKanagawaThumbnail";
import data from '../../public/data.json';
import { paintingData } from "../types";

export const theGreatWaveOffKanagawa: paintingData = {
  ...data[5],
  images: {
    hero: {
      small: heroSmall
    },
    gallery: gallery,
    thumbnail: thumbnail,
    artist: artist,
  }  
}
