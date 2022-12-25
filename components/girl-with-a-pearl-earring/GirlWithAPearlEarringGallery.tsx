import Image from 'next/image';
import imgSrc from '../../../public/assets/girl-with-a-pearl-earring/gallery.jpg';

export default function GirlWithAPearlEarringArtist({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}