import Image from 'next/image';
import imgSrc from '../../public/assets/the-storm-on-the-sea-of-galilee/gallery.jpg';

export default function TheStormOnTheSeaOfGalileeGallery({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}