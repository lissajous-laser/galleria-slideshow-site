import Image from 'next/image';
import imgSrc from '../../public/assets/arnolfini-portrait/thumbnail.jpg';

export default function ArnolfiniPortraitThumbnail({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
      width={310}
      height={330}
    />
  );
}