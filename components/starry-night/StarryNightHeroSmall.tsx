import Image from 'next/image';
import imgSrc from '../../public/assets/starry-night/hero-small.jpg';

export default function StarryNightHeroSmall({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}
