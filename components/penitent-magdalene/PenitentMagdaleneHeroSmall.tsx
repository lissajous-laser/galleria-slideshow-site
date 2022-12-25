import Image from 'next/image';
import imgSrc from '../../public/assets/penitent-magdalene/hero-small.jpg';

export default function PenitentMagdaleneHeroSmall({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}