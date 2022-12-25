import Image from 'next/image';
import imgSrc from '../../public/assets/the-night-cafe/hero-small.jpg';

export default function TheNightCafeHeroSmall({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}