import Image from 'next/image';
import imgSrc from '../../public/assets/the-storm-on-the-sea-of-galilee/artist.jpg';

export default function TheStormOnTheSeaOfGalileeArtist({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}