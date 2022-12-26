import artist from "../../components/lady-with-an-ermine/LadyWithAnErmineArtist";
import gallery from "../../components/lady-with-an-ermine/LadyWithAnErmineGallery";
import heroSmall from "../../components/lady-with-an-ermine/LadyWithAnErmineHeroSmall";
import thumbnail from "../../components/lady-with-an-ermine/LadyWithAnErmineThumbnail";
import data from '../../public/data.json';
import { PaintingData } from "../types";

export const ladyWithAnErmine: PaintingData = {
  ...data[8],
  images: {
    hero: {
      small: heroSmall
    },
    gallery: gallery,
    thumbnail: thumbnail,
    artist: artist,
  }  
}
