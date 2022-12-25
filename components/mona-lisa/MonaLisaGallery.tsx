import Image from 'next/image';
import imgSrc from '../../public/assets/mona-lisa/gallery.jpg';

export default function MonaLisaGallery({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}