import Image from 'next/image';
import imgSrc from '../../public/assets/penitent-magdalene/thumbnail.jpg';

export default function PenitentMagdaleneThumbnail({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
      width={310}
      height={250}
    />
  );
}