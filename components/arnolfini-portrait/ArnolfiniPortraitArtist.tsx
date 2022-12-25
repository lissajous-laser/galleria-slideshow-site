import Image from 'next/image';
import imgSrc from '../../public/assets/arnolfini-portrait/artist.jpg';

export default function ArnolfiniPortraitArtist({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}