import Image from 'next/image';
import imgSrc from '../../public/assets/the-sleeping-gypsy/gallery.jpg';

export default function TheSleepingGypsyGallery({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}