import Image from 'next/image';
import imgSrc from '../../public/assets/lady-with-an-ermine/gallery.jpg';

export default function LadyWithAnErmineGallery({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}