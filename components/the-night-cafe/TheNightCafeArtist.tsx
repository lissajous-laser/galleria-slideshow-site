import Image from 'next/image';
import imgSrc from '../../public/assets/the-night-cafe/artist.jpg';

export default function TheNightCafeArtist({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}