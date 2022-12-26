import artist from "../../components/van-gogh-self-portrait/VanGoghSelfPortraitArtist";
import gallery from "../../components/van-gogh-self-portrait/VanGoghSelfPortraitGallery";
import heroSmall from "../../components/van-gogh-self-portrait/VanGoghSelfPortraitHeroSmall";
import thumbnail from "../../components/van-gogh-self-portrait/VanGoghSelfPortraitThumbnail";
import data from '../../public/data.json';
import { PaintingData } from "../types";

export const vanGoghSelfPortrait: PaintingData = {
  ...data[6],
  images: {
    hero: {
      small: heroSmall
    },
    gallery: gallery,
    thumbnail: thumbnail,
    artist: artist,
  }  
}
