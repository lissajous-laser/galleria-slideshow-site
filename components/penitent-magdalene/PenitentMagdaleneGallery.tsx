import Image from 'next/image';
import imgSrc from '../../public/assets/penitent-magdalene/gallery.jpg';

export default function PenitentMagdaleneGallery({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}