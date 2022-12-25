import Image from 'next/image';
import imgSrc from '../../public/assets/van-gogh-self-portrait/gallery.jpg';

export default function VanGoghSelfPortraitGallery({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}