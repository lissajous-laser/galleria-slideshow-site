import Image from 'next/image';
import imgSrc from '../../public/assets/the-swing/thumbnail.jpg';

export default function TheSwingThumbnail({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
      width={310}
      height={340}
    />
  );
}