import Image from 'next/image';
import imgSrc from '../../public/assets/guernica/gallery.jpg';

export default function GuernicaGallery({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}