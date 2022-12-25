import Image from 'next/image';
import imgSrc from '../../public/assets/mona-lisa/thumbnail.jpg';

export default function MonaLisaThumbnail({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
      width={310}
      height={525}
    />
  );
}