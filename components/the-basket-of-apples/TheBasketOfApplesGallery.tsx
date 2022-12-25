import Image from 'next/image';
import imgSrc from '../../public/assets/the-basket-of-apples/gallery.jpg';

export default function TheBasketOfApplesGallery({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}