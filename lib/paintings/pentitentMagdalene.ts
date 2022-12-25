import artist from "../../components/penitent-magdalene/PenitentMagdaleneArtist";
import gallery from "../../components/penitent-magdalene/PenitentMagdaleneGallery";
import heroSmall from "../../components/penitent-magdalene/PenitentMagdaleneHeroSmall";
import thumbnail from "../../components/penitent-magdalene/PenitentMagdaleneThumbnail";
import data from '../../public/data.json';
import { paintingData } from "../types";

export const penitentMagdalene: paintingData = {
  ...data[3],
  images: {
    hero: {
      small: heroSmall
    },
    gallery: gallery,
    thumbnail: thumbnail,
    artist: artist,
  }  
}
