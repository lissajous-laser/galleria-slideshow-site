import Image from 'next/image';
import imgSrc from '../../public/assets/guernica/artist.jpg';

export default function GuernicaArtist({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}