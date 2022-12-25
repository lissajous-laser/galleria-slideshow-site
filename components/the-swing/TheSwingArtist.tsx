import Image from 'next/image';
import imgSrc from '../../public/assets/the-swing/artist.jpg';

export default function TheSwingArtist({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}