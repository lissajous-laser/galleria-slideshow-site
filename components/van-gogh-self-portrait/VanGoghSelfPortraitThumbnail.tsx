import Image from 'next/image';
import imgSrc from '../../public/assets/van-gogh-self-portrait/thumbnail.jpg';

export default function VanGoghSelfThumbnails({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
      width={310}
      height={500}
    />
  );
}