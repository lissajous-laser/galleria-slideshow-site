import artist from "../../components/mona-lisa/MonaLisaArtist";
import gallery from "../../components/mona-lisa/MonaLisaGallery";
import heroSmall from "../../components/mona-lisa/MonaLisaHeroSmall";
import thumbnail from "../../components/mona-lisa/MonaLisaThumbnail";
import data from '../../public/data.json';
import { paintingData } from "../types";

export const monaLisa: paintingData = {
  ...data[13],
  images: {
    hero: {
      small: heroSmall
    },
    gallery: gallery,
    thumbnail: thumbnail,
    artist: artist,
  }  
}
