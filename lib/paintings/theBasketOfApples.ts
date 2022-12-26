import artist from "../../components/the-basket-of-apples/TheBasketOfApplesArtist";
import gallery from "../../components/the-basket-of-apples/TheBasketOfApplesGallery";
import heroSmall from "../../components/the-basket-of-apples/TheBasketOfApplesHeroSmall";
import thumbnail from "../../components/the-basket-of-apples/TheBasketOfApplesThumbnail";
import data from '../../public/data.json';
import { PaintingData } from "../types";

export const theBasketOfApples: PaintingData = {
  ...data[10],
  images: {
    hero: {
      small: heroSmall
    },
    gallery: gallery,
    thumbnail: thumbnail,
    artist: artist,
  }  
}
