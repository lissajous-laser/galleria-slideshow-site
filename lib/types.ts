export type paintingData = {
  name: string,
  year: number,
  description: string,
  source: string,
  artist: {
    image: string,
    name: string,
  },
  images: {
    hero: {
      small: ({alt} : {alt: string}) => JSX.Element
    },
    gallery: ({alt} : {alt: string}) => JSX.Element,
    thumbnail: ({alt} : {alt: string}) => JSX.Element,
    artist: ({alt} : {alt: string}) => JSX.Element,
  },
}