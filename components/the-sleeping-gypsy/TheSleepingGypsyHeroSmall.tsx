import Image from 'next/image';
import imgSrc from '../../public/assets/the-sleeping-gypsy/hero-small.jpg';

export default function TheSleepingGypsyHeroSmall({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}