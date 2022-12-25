import Image from 'next/image';
import imgSrc from '../../public/assets/girl-with-pearl-earring/hero-small.jpg';

export default function GirlWithAPearlEarringHeroSmall({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}
