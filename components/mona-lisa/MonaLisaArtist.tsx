import Image from 'next/image';
import imgSrc from '../../public/assets/mona-lisa/artist.jpg';

export default function MonaLisaArtist({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}