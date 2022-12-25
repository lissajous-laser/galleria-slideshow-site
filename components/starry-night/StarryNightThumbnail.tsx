import Image from 'next/image';
import imgSrc from '../../public/assets/starry-night/thumbnail.jpg';

export default function StarryNightThumbnail({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      width={310}
      height={250}
      style={{display: 'block'}}
    />
  );
}
