import Image from 'next/image';
import imgSrc from '../../public/assets/penitent-magdalene/artist.jpg';

export default function PenitentMagdaleneArtist({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}