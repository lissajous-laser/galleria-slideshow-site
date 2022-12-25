import Image from 'next/image';
import imgSrc from '../../public/assets/starry-night/gallery.jpg';

export default function StarryNightGallery({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}