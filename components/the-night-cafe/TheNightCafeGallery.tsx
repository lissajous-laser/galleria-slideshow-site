import Image from 'next/image';
import imgSrc from '../../public/assets/the-night-cafe/gallery.jpg';

export default function TheNightCafeGallery({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}