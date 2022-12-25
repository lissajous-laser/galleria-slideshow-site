import Image from 'next/image';
import imgSrc from '../../public/assets/arnolfini-portrait/hero-small.jpg';

export default function ArnolfiniPortraitGallery({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}