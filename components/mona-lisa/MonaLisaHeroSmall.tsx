import Image from 'next/image';
import imgSrc from '../../public/assets/mona-lisa/hero-small.jpg';

export default function MonaLisaHeroSmall({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}