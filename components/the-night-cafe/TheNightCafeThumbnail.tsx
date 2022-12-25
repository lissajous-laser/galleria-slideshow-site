import Image from 'next/image';
import imgSrc from '../../public/assets/the-night-cafe/thumbnail.jpg';

export default function TheNightCafeThumbnail({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
      width={310}
      height={260}
    />
  );
}