import Image from 'next/image';
import imgSrc from '../../public/assets/the-swing/gallery.jpg';

export default function TheSwingGallery({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}