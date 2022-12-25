import Image from 'next/image';
import imgSrc from '../../public/assets/girl-with-pearl-earring/thumbnail.jpg';

export default function GirlWithAPearlEarringThumbnail({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
      width={310}
      height={400}
    />
  );
}
