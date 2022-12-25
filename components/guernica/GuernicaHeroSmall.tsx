import Image from 'next/image';
import imgSrc from '../../public/assets/guernica/hero-small.jpg';

export default function GuernicaHeroSmall({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}