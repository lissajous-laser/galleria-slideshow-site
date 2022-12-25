import Image from 'next/image';
import imgSrc from '../../public/assets/the-basket-of-apples/hero-small.jpg';

export default function TheBasketOfApplesHeroSmall({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}