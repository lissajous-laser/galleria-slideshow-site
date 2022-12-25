import Image from 'next/image';
import imgSrc from '../../public/assets/the-swing/hero-small.jpg';

export default function TheSwingHeroSmall({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}