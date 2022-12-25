import Image from 'next/image';
import imgSrc from '../../public/assets/lady-with-an-ermine/hero-small.jpg';

export default function LadyWithAnErmineHeroSmall({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}