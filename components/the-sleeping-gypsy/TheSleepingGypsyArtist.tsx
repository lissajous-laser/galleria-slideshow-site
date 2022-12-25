import Image from 'next/image';
import imgSrc from '../../public/assets/the-sleeping-gypsy/artist.jpg';

export default function TheSleepingGypsyArtist({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}