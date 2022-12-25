import Image from 'next/image';
import imgSrc from '../../public/assets/the-basket-of-apples/thumbnail.jpg';

export default function TheBasketOfApplesThumbnail({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
      width={310}
      height={430}
    />
  );
}