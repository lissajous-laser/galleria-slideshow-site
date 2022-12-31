import { PaintingData } from "./types";

export const paintingIdxByColumnLg = [
  [0, 4, 8, 11],
  [1, 5, 9, 12],
  [2, 6, 13],
  [3, 7, 10, 14]
];

export const paintingIdxByColumnMd = [
  [0, 2, 4, 6, 8, 11, 13],
  [1, 3, 5, 7, 9, 10, 12, 14]
];

export const breakPoints = {
  1160: 1160,
}

export const samplePainting: PaintingData = {
  "name": "Mona Lisa",
  "year": 1503,
  "description": "The Mona Lisa (/ˌmoʊnə ˈliːsə/; ...",
  "source": "https://en.wikipedia.org/wiki/Mona_Lisa",
  "artist": {
    "image": "./assets/mona-lisa/artist.jpg",
    "name": "Leonardo da Vinci"
  },
  "images": {
    "thumbnail": "./assets/mona-lisa/thumbnail.jpg",
    "hero": {
      "small": "./assets/mona-lisa/hero-small.jpg",
      "large": "./assets/mona-lisa/hero-large.jpg"
    },
    "gallery": "./assets/mona-lisa/gallery.jpg"
  },
  "metadata": {
    "gallery": {
      "width": 509,
      "height": 712
    },
    "thumbnail": {
      "width": 327,
      "height": 525
    },
    "index": 13
  } 
};