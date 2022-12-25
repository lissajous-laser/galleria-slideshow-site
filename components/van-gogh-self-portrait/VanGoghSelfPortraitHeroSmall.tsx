import Image from 'next/image';
import imgSrc from '../../public/assets/van-gogh-self-portrait/hero-small.jpg';

export default function VanGoghSelfPortraitHeroSmall({alt} : {alt: string}) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      placeholder='blur'
      style={{display: 'block'}}
    />
  );
}