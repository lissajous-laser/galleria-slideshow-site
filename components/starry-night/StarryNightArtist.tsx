import Image from 'next/image';
import imgSrc from '../../public/assets/starry-night/artist.jpg';

export default function StarryNightArtist({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}