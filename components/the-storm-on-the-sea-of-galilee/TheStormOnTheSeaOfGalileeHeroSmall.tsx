import Image from 'next/image';
import imgSrc from '../../public/assets/the-storm-on-the-sea-of-galilee/hero-small.jpg';

export default function TheStormOnTheSeaOfGalileeHeroSmall({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}