import Image from 'next/image';
import imgSrc from '../../public/assets/the-great-wave-off-kanagawa/thumbnail.jpg';

export default function TheGreatWaveOffKanagawaThumbnail({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
      width={310}
      height={280}
    />
  );
}