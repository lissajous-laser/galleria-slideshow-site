import Image from 'next/image';
import imgSrc from '../../public/assets/girl-with-pearl-earring/artist.jpg';

export default function GirlWithPearlEarringArtist({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}