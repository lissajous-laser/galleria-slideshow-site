import Image from 'next/image';
import imgSrc from '../../public/assets/the-storm-on-the-sea-of-galilee/thumbnail.jpg';

export default function TheStormOnTheSeaOfGalileeThumbnail({alt} : {alt: string}) {
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