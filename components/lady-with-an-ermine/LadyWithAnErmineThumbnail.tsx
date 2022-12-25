import Image from 'next/image';
import imgSrc from '../../public/assets/lady-with-an-ermine/thumbnail.jpg';

export default function LadyWithAnErmineThumbnail({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
      width={310}
      height={420}
    />
  );
}