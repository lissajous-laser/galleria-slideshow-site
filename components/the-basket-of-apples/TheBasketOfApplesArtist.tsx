import Image from 'next/image';
import imgSrc from '../../public/assets/the-basket-of-apples/artist.jpg';

export default function TheBasketOfApplesArtist({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}