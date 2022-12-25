import Image from 'next/image';
import imgSrc from '../../public/assets/the-great-wave-off-kanagawa/gallery.jpg';

export default function TheGreatWaveOffKanagawaGallery({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}