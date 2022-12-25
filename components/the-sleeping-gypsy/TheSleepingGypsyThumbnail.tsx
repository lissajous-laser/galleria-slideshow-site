import Image from 'next/image';
import imgSrc from '../../public/assets/the-sleeping-gypsy/thumbnail.jpg';

export default function TheSleepingGypsyThumbnail({alt} : {alt: string}) {
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